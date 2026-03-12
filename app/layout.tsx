import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle Cummings",
  description: "cloud/devops",
  metadataBase: new URL("https://kylec.dev"),
  openGraph: {
    title: "Kyle Cummings",
    description: "cloud/devops",
    url: "https://kylec.dev",
    siteName: "Kyle Cummings",
  },
  twitter: {
    card: "summary",
    title: "Kyle Cummings",
    description: "cloud/devops",
    creator: "@kylecumm1ngs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
