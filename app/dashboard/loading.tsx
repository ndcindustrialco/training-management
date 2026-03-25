"use client";

export default function DashboardLoading() {
    return (
        <div className="space-y-6 animate-pulse p-4">
            <div className="h-10 w-64 bg-slate-200 rounded-lg mb-8"></div>

            <div className="grid grid-cols-3 gap-6">
                <div className="h-32 bg-slate-200 rounded-2xl"></div>
                <div className="h-32 bg-slate-200 rounded-2xl"></div>
                <div className="h-32 bg-slate-200 rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <div className="h-96 bg-slate-200 rounded-2xl"></div>
                </div>
                <div className="space-y-6">
                    <div className="h-48 bg-slate-200 rounded-2xl"></div>
                    <div className="h-48 bg-slate-200 rounded-2xl"></div>
                </div>
            </div>
        </div>
    );
}
