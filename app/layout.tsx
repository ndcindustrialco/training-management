import type { Metadata } from "next";
// 1. เปลี่ยนจาก next/font/google เป็น next/font/local
import localFont from "next/font/local";
import "./globals.css";

// 2. กำหนดค่า localFont แทนที่ของเดิม
  const baiJamjuree = localFont({
    src: [
      {
        path: "../public/fonts/BaiJamjuree-Light.ttf", // ตรวจสอบ Path ให้ถูกต้อง
        weight: "300",
        style: "normal",
      },
      // หากมีไฟล์ Weight อื่นๆ เช่น Bold สามารถเพิ่ม Object ลงใน Array นี้ได้เลย
    ],
    variable: "--font-bai-jamjuree",
  });

export const metadata: Metadata = {
  title: "NDC Training Management System",
  description: "ระบบบริหารจัดการการเรียนรู้และการอบรมพนักงาน",
};

import SessionProvider from "@/components/providers/SessionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${baiJamjuree.variable} ${baiJamjuree.className} font-sans antialiased`}
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}