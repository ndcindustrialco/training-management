import Link from "next/link";

interface StatsCardProps {
    label: string;
    value: number;
    href?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, value, href }) => {
    const CardContent = (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group cursor-pointer hover:-translate-y-1 active:scale-95">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs font-semibold text-accent uppercase tracking-widest">{label}</p>
                    <p className="text-4xl font-extrabold text-primary mt-2">{value.toLocaleString()}</p>
                </div>
            </div>
            {href && (
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    ดูรายละเอียดเพิ่มเติม
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            )}
        </div>
    );

    if (href) {
        return <Link href={href}>{CardContent}</Link>;
    }

    return CardContent;
};
