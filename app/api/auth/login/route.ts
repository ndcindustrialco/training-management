import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { signToken } from '@/lib/auth';

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
        }

        let user = await prisma.user.findUnique({
            where: { username },
        });

        // Automatically create admin user with admin/admin if it doesn't exist
        if (!user && username === 'admin' && password === 'admin') {
            const hashedPassword = await bcrypt.hash('admin', 10);
            user = await prisma.user.create({
                data: {
                    username: 'admin',
                    password: hashedPassword,
                    role: 'admin',
                },
            });
        }

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const token = signToken({ id: user.id, username: user.username, role: user.role });

        const response = NextResponse.json({
            message: 'Login successful',
            user: { id: user.id, username: user.username, role: user.role }
        });

        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
