import { Inter as FontSans } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { cookies } from "next/headers";
import AdminLayout from "./_components/AdminLayout";
import { Toaster } from "react-hot-toast";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AdminLayout>{children}</AdminLayout>
        <Toaster />
      </body>
    </html>
  );
}
