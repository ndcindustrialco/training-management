"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
            }

            // Save user info to local storage for UI use (token is in HttpOnly cookie)
            localStorage.setItem("user", JSON.stringify(data.user));

            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-background p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl border border-secondary">
                <div className="mb-8 text-center text-primary">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight">ระบบบริหารการอบรม</h1>
                    <p className="text-accent mt-2 font-medium">กรุณาเข้าสู่ระบบด้วยบัญชีของคุณ</p>
                </div>

                {error && (
                    <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-600 border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <Input
                        label="ชื่อผู้ใช้งาน"
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="admin"
                    />

                    <Input
                        label="รหัสผ่าน"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="admin"
                    />

                    <Button
                        type="submit"
                        isLoading={loading}
                        className="w-full py-3 text-lg"
                    >
                        เข้าสู่ระบบ
                    </Button>
                </form>
            </div>
        </div>
    );
}
