import "~/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});




export default function LayoutPage02({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={`${geist.variable}`}>
      <div className="w-full justify-center flex border-1 text-[20px] bg-[#FFFFFF] text-[#000000]">Shop</div>
      {children}
    </main>
  );
}
