import type { Metadata } from "next";
import { Inter, Outfit, DM_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });


export const metadata: Metadata = {
    title: "YETbet - Tweet-Based Futures Market",
    description: "The Premier Pari-Mutuel Tweet-Based Futures Market built on Solana",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={outfit.variable + ' ' + dmSans.variable + ' font-body inset-0 bg-gradient-to-br !min-h-[100vh] from-[#181A20] via-[#23263a] to-[#7c3aed] dark:from-[#181A20] dark:via-[#23263a] dark:to-[#7c3aed]'}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-30 rounded-full blur-3xl" />
                    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 rounded-full blur-3xl" />
                </div>
                <div className="overflow-auto max-h-[100vh]">
                    <Toaster position="top-right" />
                    {/* <div className="absolute inset-0 z-0 " /> */}
                    {/* <div className="max-w-7xl mx-auto  flex items-center justify-between">
                <img src="/banners/banner.jpg" alt="banner" className="w-full rounded" />
              </div> */}
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
