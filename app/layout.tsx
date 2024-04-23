import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  style: ["italic", "normal"],
  fallback: ["Helvetica Neue", "sans-serif"],
  subsets: ["latin-ext", "latin"],
});

export const metadata: Metadata = {
  title: "Bolata",
  description: "Sistem Pemerintahan Satu Data Bolata",
  icons: {
    icon: "/icons/bolata_icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
