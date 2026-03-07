import { getDashboardStats } from '@/lib/stats';
import DashboardClient from './_components/DashboardClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard | Training Management System',
};

// Revalidate every 60 seconds (Caching)
export const revalidate = 60;

export default async function DashboardPage() {
    const stats = await getDashboardStats();

    return <DashboardClient data={JSON.parse(JSON.stringify(stats))} />;
}
