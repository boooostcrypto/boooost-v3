import { Prisma, PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { PrivyClient, WalletWithMetadata } from "@privy-io/server-auth";

const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET;

if (!PRIVY_APP_ID || !PRIVY_APP_SECRET) {
  throw new Error("Missing Privy environment variables");
}

const client = new PrivyClient(PRIVY_APP_ID, PRIVY_APP_SECRET);
const prisma = new PrismaClient()


export async function GET(request: Request) {
  try {
    const userId = request.headers.get('x-user-id');
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const privyUser = await client.getUser(userId);
    const privyWallets = privyUser.linkedAccounts.filter(
        (account): account is WalletWithMetadata => account.type === 'wallet'
      );
    

      const dbUser = await prisma.user.findUnique({
        where: { user_id: userId },
        include: { wallets: true },
      });
  
      if (!dbUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
  
      const walletsToAdd = privyWallets.filter(privyWallet => 
        !dbUser.wallets.some(dbWallet => 
          dbWallet.address === privyWallet.address && 
          dbWallet.chainId === privyWallet.chainId
        )
      );
  
      if (walletsToAdd.length > 0) {
        const walletData: Prisma.WalletCreateManyInput[] = walletsToAdd.map(wallet => ({
          address: wallet.address,
          chainId: wallet.chainId ?? 'unknown',
          walletClientType: wallet.walletClientType ?? 'unknown',
          connectorType: wallet.connectorType ?? 'unknown',
          userId: dbUser.id,
        }));
  
        await prisma.wallet.createMany({
          data: walletData,
        });
      }

    const updatedDbWallets = await prisma.wallet.findMany({
        where: {
        id: dbUser.id,
        },
    });

    return NextResponse.json({
        wallets: updatedDbWallets,
    });

  } catch (error) {
    console.error('Error handling user:', error);
    return NextResponse.json({ error: 'Error handling user' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}