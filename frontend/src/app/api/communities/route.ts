import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request,) {
  try {
    const userId = request.headers.get('x-user-id');

    // ユーザーIDの検証
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // まず、user_idに基づいてユーザーを検索
    const user = await prisma.user.findUnique({
        where: { user_id: userId },
      });
  
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
  
      // ユーザーが作成したコミュニティを取得
      const communities = await prisma.community.findMany({
        where: {
          creatorId: user.id, // ここでユーザーの内部IDを使用
        },
        include: {
          token: true,
          links: true,
          _count: {
            select: { members: true },
          },
        },
      });

    // BigInt値を文字列に変換
    const serializedCommunities = JSON.parse(JSON.stringify(communities, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ));

    return NextResponse.json(serializedCommunities);
  } catch (error) {
    console.error('Failed to fetch communities:', error);
    return NextResponse.json({ error: 'Failed to fetch communities' }, { status: 500 });
  }
}