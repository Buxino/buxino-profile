import type { Metadata } from "next";
import { Inter, Asap } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body className={`${inter.variable} ${asap.variable} font-asap antialiased bg-black text-white relative`}>
        <Navbar />
        
        {/* Added pt-20 to pt-24 depending on your navbar height – adjust after testing */}
        <main className="relative z-0 pt-24 md:pt-28">
          {children}
        </main>
      </body>
    </html>
  );
}