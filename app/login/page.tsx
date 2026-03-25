"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signIn } from "next-auth/react";

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
            const result = await signIn("credentials", {
                username,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
                setLoading(false);
            } else {
                router.push("/dashboard");
                router.refresh();
                // We keep loading active during the redirect transition
            }
        } catch (err: any) {
            setError("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-background p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl border border-secondary">
                <div className="mb-8 text-center text-primary">
                    <div className="h-16    rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <img src="/logo/NDC-LOGO-04.png" alt="" className="h-16" />
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight">Training Management System</h1>
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
                       placeholder="Username"
                    />

                    <Input
                        label="รหัสผ่าน"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
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
