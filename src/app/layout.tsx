import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  applicationName: "OpsWarden",
  title: "OpsWarden",
  description: "Advanced NOC & Incident Management",
  appleWebApp: {
    capable: true,
    title: "OpsWarden",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#15161A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen text-text selection:bg-gold/20 selection:text-gold relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
