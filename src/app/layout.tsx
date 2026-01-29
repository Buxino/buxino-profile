import type { Metadata } from "next";
import { Inter, Asap } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const asap = Asap({
  subsets: ["latin"],
  variable: "--font-asap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Buxino Consulting",
  description: "Buxino Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* ADDED 'bg-black' to the body class below */}
      <body className={`${inter.variable} ${asap.variable} font-asap antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
