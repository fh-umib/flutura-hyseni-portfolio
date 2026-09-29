import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Manrope,
} from "next/font/google";
import "./globals.css";
import "./redesign.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Manrope({
  variable: "--font-display-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flutura Hyseni | Computer Science & Engineering",
  description:
    "The portfolio of Flutura Hyseni, a Computer Science & Engineering student.",
    icons: {
    icon: "/icon.svg",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
