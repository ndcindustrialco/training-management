"use client";

import { Navbar } from "@/components/layout/Navbar";
import { signOut } from "next-auth/react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const handleLogout = async () => {
        await signOut({ callbackUrl: "/" });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar onLogout={handleLogout} />

            <main className="flex-1 max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}
