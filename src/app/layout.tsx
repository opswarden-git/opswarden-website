import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const description =
  "Coordinate incidents, releases, automation and operational decisions in one real-time workspace.";

export const metadata: Metadata = {
  applicationName: "OpsWarden",
  title: "OpsWarden — Incident and release coordination",
  description,
  keywords: [
    "incident management",
    "release coordination",
    "SRE",
    "DevOps",
    "on-call",
  ],
  openGraph: {
    title: "OpsWarden — Incident and release coordination",
    description,
    siteName: "OpsWarden",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/wiki/opswarden-git/opswarden/assets/readme/incidents.png",
        width: 2560,
        height: 1600,
        alt: "OpsWarden incident queue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsWarden — Incident and release coordination",
    description,
    images: [
      "https://raw.githubusercontent.com/wiki/opswarden-git/opswarden/assets/readme/incidents.png",
    ],
  },
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-bg font-sans text-text antialiased`}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
