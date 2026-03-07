import { NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth';
import { getDashboardStats } from '@/lib/stats';

export const GET = withAuth(async (req: Request) => {
    try {
        const stats = await getDashboardStats();
        return NextResponse.json(stats);
    } catch (error) {
        console.error('Stats error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});
