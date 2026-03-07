"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            router.push("/login");
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
        } catch (e) {
            console.error("Logout error", e);
        }
        localStorage.removeItem("user");
        router.push("/login");
    };

    if (!isAuthenticated) return null;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar onLogout={handleLogout} />

            <main className="flex-1 max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}
