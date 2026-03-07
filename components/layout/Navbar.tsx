"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
    onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigation = [
        { name: "หน้าแรก", href: "/dashboard" },
        { name: "พนักงาน", href: "/dashboard/employees" },
        { name: "หลักสูตร", href: "/dashboard/courses" },
        { name: "เนื้อหาหลักสูตร", href: "/dashboard/course-descriptions" },
        { name: "บันทึกการอบรม", href: "/dashboard/training-records" },
    ];

    return (
        <nav className="bg-primary shadow-lg sticky top-0 z-50">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="shrink-0 flex items-center">
                            <Link href="/dashboard" className="text-white text-xl font-bold tracking-tighter">
                                <span className="flex items-center gap-2">
                                    <span className=" xs:inline">Training Management System</span>
                                </span>
                            </Link>
                        </div>
                        <div className="hidden lg:ml-10 lg:flex lg:space-x-6">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`${isActive
                                            ? "text-white font-bold"
                                            : "text-white/60 hover:text-white"
                                            } px-1 pt-1 text-sm font-medium transition-all relative group`}
                                    >
                                        {item.name}
                                        {isActive && <span className="absolute bottom-0.5 left-0 w-full h-0.5 bg-white rounded-full"></span>}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={onLogout}
                            className="hidden sm:block text-white/80 hover:text-white px-4 py-2 rounded-xl text-sm font-bold border border-white/20 hover:bg-white/10 transition-all active:scale-95"
                        >
                            ออกจากระบบ
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu content */}
            {isMobileMenuOpen && (
                <div className="lg:hidden animate-in slide-in-from-top duration-300 bg-primary-dark border-t border-white/10 pb-4">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`${isActive
                                        ? "bg-white/20 text-white"
                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                        } block px-3 py-3 rounded-xl text-base font-bold transition-all`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        <button
                            onClick={onLogout}
                            className="w-full text-left text-red-200 hover:bg-red-500/20 px-3 py-3 rounded-xl text-base font-bold transition-all mt-4 border border-red-500/20"
                        >
                            ออกจากระบบ
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};
