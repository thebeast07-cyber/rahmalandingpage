import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Rahma Seserahan Demak – Sewa & Custom Hantaran Pernikahan",
    template: "%s | Rahma Seserahan Demak – Sewa & Custom Hantaran Pernikahan",
  },
  description: "Seserahan curated & custom—elegan, rapi, dan estetik.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}>
        {/* Mobile (<=640px) */}
        <div className="fixed inset-0 -z-10 block md:hidden bg-[url('/assets/mobile.webp')] bg-cover bg-top bg-no-repeat" />

        {/* Tablet (641–1024px) */}
        <div className="fixed inset-0 -z-10 hidden md:block lg:hidden bg-[url('/assets/tablet.webp')] bg-cover bg-center bg-no-repeat" />

        {/* Desktop (>=1024px) */}
        <div className="fixed inset-0 -z-10 hidden lg:block bg-[url('/assets/desktop.webp')] bg-cover bg-[50%_30%] bg-no-repeat" />

        {/* Optional overlay supaya teks lebih kebaca */}
        {/* <div className="fixed inset-0 -z-10 bg-white/40 pointer-events-none" /> */}

        {children}
      </body>
    </html>
  );
}
