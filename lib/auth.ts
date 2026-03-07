import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret123';

export const signToken = (payload: any) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};

export const getUser = async (req: Request) => {
    let token = null;

    // 1. Check cookies (Priority for HttpOnly)
    try {
        const cookieStore = await cookies();
        token = cookieStore.get('token')?.value;
    } catch (e) {
        // cookies() might fail in some contexts, fallback to headers
    }

    // 2. Check Authorization header (Fallback)
    if (!token) {
        const authHeader = req.headers.get('authorization');
        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.split(' ')[1];
        }
    }

    if (!token) return null;
    return verifyToken(token);
};

export function withAuth(handler: Function) {
    return async (req: Request, ...args: any[]) => {
        const user = await getUser(req);

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        return handler(req, ...args);
    };
}
