"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { StatsCard } from "./StatsCard";
import { RecentRecordsTable } from "./RecentRecordsTable";
import { DistributionCard } from "./DistributionCard";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TrainingRecordDetailsModal } from "@/app/dashboard/training-records/_components/TrainingRecordDetailsModal";

export default function DashboardClient({ data }: { data: any }) {
    const router = useRouter();
    const [selectedRecord, setSelectedRecord] = useState<any>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const handleViewDetail = (rec: any) => {
        setSelectedRecord(rec);
        setIsViewModalOpen(true);
    };

    const statsCards = [
        { label: "พนักงานทั้งหมด", value: data.count.employees, href: "/dashboard/employees" },
        { label: "หลักสูตรทั้งหมด", value: data.count.courses, href: "/dashboard/courses" },
        { label: "บันทึกการอบรม", value: data.count.records, href: "/dashboard/training-records" },
    ];

    return (
        <div className="space-y-2 animate-in fade-in duration-500 text-slate-800 pb-10 sm:p-0 p-4">
            <div>
                <h1 className="text-3xl font-bold text-primary tracking-tight">หน้าแรก (Dashboard)</h1>
            </div>

            <div className="grid grid-cols-3 gap-2">
                {statsCards.map((stat, i) => (
                    <StatsCard key={i} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <div className="lg:col-span-2">
                    <Card
                        title="กิจกรรมการอบรมล่าสุด"
                        headerAction={
                            <Button
                                variant="ghost"
                                onClick={() => router.push('/dashboard/training-records')}
                                className="text-primary font-semibold"
                            >
                                ดูทั้งหมด
                            </Button>
                        }
                        className="p-0 overflow-hidden"
                    >
                        <RecentRecordsTable records={data.recentRecords} onRecordClick={handleViewDetail} />
                    </Card>
                </div>

                <div className="space-y-2">
                    <DistributionCard
                        title="แผนก"
                        items={data.departments}
                        total={data.count.employees}
                        barColor="bg-primary"
                    />

                    <DistributionCard
                        title="หมวดหมู่หลักสูตร"
                        items={data.categories}
                        total={data.count.courses}
                        barColor="bg-blue-500"
                    />
                </div>
            </div>

            <TrainingRecordDetailsModal
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                record={selectedRecord}
            />
        </div>
    );
}
