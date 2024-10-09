import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const userId = request.headers.get('x-user-id');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 401 });
    }

    const body = await request.json();
    const { community, token, communityLinks } = body;

    // バリデーション（簡易的な例）
    if (!community.name || !token.name || !token.symbol) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // トランザクションを使用して、関連するデータを一緒に作成
    const result = await prisma.$transaction(async (prisma) => {
        const user = await prisma.user.findUnique({
            where: { user_id: userId },
          });
    
          if (!user) {
            throw new Error('User not found');
          }
      // Communityの作成
      const createdCommunity = await prisma.community.create({
        data: {
          name: community.name,
          description: community.description,
          coverImage: community.coverImage,
          creatorId: user.id,
          token: {
            create: {
              name: token.name,
              symbol: token.symbol,
              logo: token.logo,
              initialSupply: token.initialSupply,
              initialPrice: token.initialPrice,
              maxSupply: token.maxSupply,
              reserveRatio: token.reserveRatio,
              investmentStartDate: new Date(token.investmentStartDate),
            },
          },
          links: communityLinks ? {
            create: communityLinks
          } : undefined,
        },
        include: {
          token: true,
          links: true,
        },
      });

      return createdCommunity;
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Failed to create community:', error);
    return NextResponse.json({ error: 'Failed to create community' }, { status: 500 });
  }
}