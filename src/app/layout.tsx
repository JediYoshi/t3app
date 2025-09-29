import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Flowers",
	description: "Flowers",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable}`}>
		<div className="navbar shadow-sm bg-[#963992]">
			<Link href="/"><div className="btn btn-ghost text-xl font-bold">Flowers</div></Link>
			<Link href="/shop"><div className="btn btn-ghost text-xl font-normal">Shop</div></Link>
		</div>
        {children}
      </body>
    </html>
  );
}
