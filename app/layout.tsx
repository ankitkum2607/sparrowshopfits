import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// One variable file covers every weight and the condensed display width.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparroh Shopfits — Retail Design, Build & Execution",
  description:
    "From retail design and fabrication to turnkey execution, Sparroh transforms retail concepts into high-performing physical spaces.",
};

export const viewport: Viewport = {
  themeColor: "#0d0d0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
