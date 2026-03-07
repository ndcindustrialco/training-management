import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    description?: string;
    headerAction?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = "", title, description, headerAction }) => {
    return (
        <div className={`bg-white rounded-2xl shadow-sm border border-secondary overflow-hidden ${className}`}>
            {(title || description || headerAction) && (
                <div className="p-6 border-b border-secondary flex justify-between items-center bg-gray-50/30">
                    <div>
                        {title && <h3 className="text-xl font-bold text-primary">{title}</h3>}
                        {description && <p className="text-sm text-accent mt-1">{description}</p>}
                    </div>
                    {headerAction && <div>{headerAction}</div>}
                </div>
            )}
            <div className="p-6">{children}</div>
        </div>
    );
};
