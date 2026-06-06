import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "OpsWarden",
  description: "Advanced NOC & Incident Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="antialiased min-h-screen text-text selection:bg-gold/20 selection:text-gold relative"
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
