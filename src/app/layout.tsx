import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NebulaBackground from "@/components/NebulaBackground"; // ✅ Import nebula

// Load Inter font for body text
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Load Poppins font for headings
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio - Abhijeet Mishra | Full-Stack Developer",
  description: "Professional portfolio of Abhijeet Mishra, a full-stack developer specializing in modern web applications and user experiences.",
  keywords: "developer, portfolio, full-stack, web development, React, Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans text-white relative`}
      >
        {/* 🌌 Nebula background sits behind everything */}
        <NebulaBackground />

        {/* Main content above nebula */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
