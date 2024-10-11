import type { Metadata } from "next";
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-r from-purple-950 via-blue-950 to-indigo-950 background-animate ${inter.className}`}>
        <ToastContainer position="top-left" />
        <main className="mx-14 min-h-screen py-20">
          {children}
        </main>
      </body>
    </html>
  );
}
