import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Vamsi's Portfolio",
  description: "Created by using Next + Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/vk icon.png" />
      </head>
      <body className="max-w-5xl mx-auto bg-black">
        <Navbar />
        <main className="md:py-20">{children}</main>
      </body>
    </html>
  );
}
