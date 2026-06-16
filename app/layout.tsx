import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/ui/Sidebar";

export const metadata: Metadata = {
  title: "Apple TV Media Center",
  description: "Premium media center experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased flex">
        <Sidebar />
        <main className="flex-1 ml-20">{children}</main>
      </body>
    </html>
  );
}
