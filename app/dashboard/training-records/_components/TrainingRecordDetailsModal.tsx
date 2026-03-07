"use client";

import React from "react";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface TrainingRecordDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    record: any;
}

export const TrainingRecordDetailsModal: React.FC<TrainingRecordDetailsModalProps> = ({
    isOpen,
    onClose,
    record,
}) => {
    if (!record) return null;

    const translateResult = (result: string) => {
        switch (result) {
            case 'Passed': return { text: 'ผ่าน', variant: 'success' as const };
            case 'Failed': return { text: 'ไม่ผ่าน', variant: 'danger' as const };
            case 'Attended': return { text: 'เข้าร่วม', variant: 'info' as const };
            default: return { text: result || '-', variant: 'neutral' as const };
        }
    };

    const result = translateResult(record.training_result);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="รายละเอียดการอบรม"
            maxWidth="2xl"
        >
            <div className="space-y-8">
                {/* Section 1: Employee and Status */}
                <div className="flex items-start justify-between border-b border-gray-100 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-2xl shadow-inner">
                            {record.employee?.employee_name_th?.charAt(0) || "U"}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{record.employee?.employee_name_th}</h3>
                            <p className="text-sm text-gray-500 font-medium">รหัสพนักงาน: <span className="text-indigo-600">{record.employee?.employee_code}</span></p>
                        </div>
                    </div>
                    <Badge variant={result.variant} className="text-sm py-1 px-3">
                        {result.text}
                    </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Section 2: Training Details */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-indigo-600 border-b border-indigo-50 pb-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="font-bold uppercase tracking-wider text-xs">ข้อมูลการอบรม</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <InfoItem label="วันที่อบรม" value={record.training_date ? new Date(record.training_date).toLocaleDateString('th-TH', {
                                year: 'numeric', month: 'long', day: 'numeric'
                            }) : "-"} />
                            <InfoItem label="จำนวนชั่วโมง" value={`${record.training_hour || 0} ชั่วโมง`} />
                            <InfoItem label="วิทยากร" value={record.trainer_name || "-"} />
                            <InfoItem label="สถานที่" value={record.location || "-"} />
                            <InfoItem
                                label="วันที่หมดอายุ"
                                value={record.expire_date ? new Date(record.expire_date).toLocaleDateString('th-TH', {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                }) : "ไม่มีวันหมดอายุ"}
                                isDanger={record.expire_date && new Date(record.expire_date) < new Date()}
                            />
                        </div>
                    </div>

                    {/* Section 3: Course Details */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-indigo-600 border-b border-indigo-50 pb-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <h4 className="font-bold uppercase tracking-wider text-xs">ข้อมูลหลักสูตร</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <InfoItem label="รหัสหลักสูตร" value={record.course?.course_code} />
                            <InfoItem label="ชื่อหลักสูตร" value={record.course?.course_name} />
                            <InfoItem label="หมวดหมู่" value={record.course?.course_category} />
                            <InfoItem label="ประเภทการฝึกอบรม" value={record.course?.training_type} />
                            <InfoItem label="หน่วยงานที่จัด" value={record.course?.organizing_agency} />
                            <div className="mt-1">
                                <dt className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">วุฒิบัตร / ประกาศนียบัตร</dt>
                                <dd className="mt-1 flex items-center gap-2">
                                    <Badge variant={record.course?.certificate_required ? "success" : "neutral"}>
                                        {record.course?.certificate_required ? "ต้องมีวุฒิบัตร" : "ไม่ต้องมีวุฒิบัตร"}
                                    </Badge>
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: Course Full Description */}
                {record.course?.descriptions && record.course.descriptions.length > 0 && (
                    <div className="space-y-3 bg-indigo-50/30 rounded-xl p-6 border border-indigo-100/50">
                        <div className="flex items-center gap-2 text-indigo-700">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h4 className="font-bold text-sm uppercase tracking-tight">รายละเอียดเนื้อหาและวัตถุประสงค์</h4>
                        </div>
                        <div className="space-y-4">
                            {record.course.descriptions.map((desc: any, idx: number) => (
                                <div key={desc.id} className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                                    {desc.description}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Section 5: Notes and Attachment */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <h4 className="text-sm font-bold text-gray-700">หมายเหตุ</h4>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                {record.note || "ไม่มีหมายเหตุ"}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-bold text-gray-700">เอกสารแนบ</h4>
                            {record.attachment ? (
                                <a
                                    href={record.attachment}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all group"
                                >
                                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600">ดูเอกสารประกอบการอบรม</span>
                                </a>
                            ) : (
                                <p className="text-sm text-gray-400 font-medium italic">ไม่มีเอกสารแนบ</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <Button variant="secondary" onClick={onClose} className="px-8">
                        ปิดหน้าต่าง
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

const InfoItem = ({ label, value, isDanger }: { label: string; value: string; isDanger?: boolean }) => (
    <div>
        <dt className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">{label}</dt>
        <dd className={`mt-0.5 text-sm font-bold ${isDanger ? 'text-red-600' : 'text-gray-700'}`}>{value || "-"}</dd>
    </div>
);
