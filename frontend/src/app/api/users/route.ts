import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
// import prisma from '@/lib/prisma'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { user_id, name } = await request.json()

    const user = await prisma.user.create({
      data: {
        user_id,
        name,
      },
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error('User creation error:', error)
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 })
  }
}