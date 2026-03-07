import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { withAuth } from '@/lib/auth';

// Only allow existing admins to register new users or make it public for now as requested?
// The request says "Register สร้าง user ที่สามารถ login admin ได้"
// Typically this is a public endpoint if they want to create their first admin or for testing.
// But for security, maybe it should be protected? 
// Let's make it public for now so they can create their admin account as requested.

export async function POST(req: Request) {
    try {
        const { username, password, role } = await req.json();

        if (!username || !password) {
            return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { username },
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                role: role || 'user',
            },
        });

        return NextResponse.json({
            message: 'User created successfully',
            user: { id: user.id, username: user.username, role: user.role }
        }, { status: 201 });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
