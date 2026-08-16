import type { Metadata } from "next";
import { Archivo, Yellowtail } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
});

export const metadata: Metadata = {
  title: "Congreso ESIQ 2026",
  description: "Congreso ESIQ 2026 · Ing. Química USAC",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${archivo.variable} ${yellowtail.variable}`}>
      <body className="min-h-dvh bg-[#0A1440] antialiased">{children}</body>
    </html>
  );
}
