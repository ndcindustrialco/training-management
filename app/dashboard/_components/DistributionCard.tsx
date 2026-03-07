import React from "react";
import { Card } from "@/components/ui/Card";

interface DistributionItem {
    name: string;
    count: number;
}

interface DistributionCardProps {
    title: string;
    items: DistributionItem[];
    total: number;
    barColor?: string;
}

export const DistributionCard: React.FC<DistributionCardProps> = ({ title, items, total, barColor = "bg-primary" }) => {
    return (
        <Card title={title}>
            <div className="space-y-4">
                {items.map((item, i) => {
                    const percentage = Math.round((item.count / total) * 100) || 0;
                    return (
                        <div key={i}>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-semibold text-primary">{item.name}</span>
                                <span className="text-accent">{item.count} {item.count > 1 ? 'รายการ' : 'รายการ'} ({percentage}%)</span>
                            </div>
                            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                                <div
                                    className={`${barColor} h-full rounded-full transition-all duration-1000 opacity-90`}
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};
