import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "success" | "warning" | "danger" | "info" | "neutral";
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = "neutral", className = "" }) => {
    const variants = {
        success: "bg-emerald-100 text-emerald-700",
        warning: "bg-orange-100 text-orange-700",
        danger: "bg-red-100 text-red-700",
        info: "bg-blue-100 text-blue-700",
        neutral: "bg-secondary text-accent",
    };

    return (
        <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.15em] ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};
