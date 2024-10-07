import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { privyId, name } = await request.json();

    let user = await prisma.user.findUnique({
      where: { user_id: privyId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          user_id: privyId,
          name,
        },
      });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error handling user:', error);
    return NextResponse.json({ error: 'Error handling user' }, { status: 500 });
  }
}