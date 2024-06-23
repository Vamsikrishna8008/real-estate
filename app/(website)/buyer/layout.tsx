"use client";
import { Inter as FontSans } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const metadata: Metadata = {
//   title: "Indian Institute of Education",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div>
          <Header />
          {children}
          <div className="slide-in-bottom">
            <Footer />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
