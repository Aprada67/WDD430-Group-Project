import type { Metadata } from "next";
import "@/app/globals.css"; 
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Handcrafted Heaven",
  description: "E-commerce site for handmade products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={inter.className}>
      <body className="bg-background text-text">
        {children}
      </body>
    </html>
  )
}