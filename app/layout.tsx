import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://genera.dignita.tech"),
  title: { default: "Genera — Propuesta de IA y Automatización", template: "%s | Genera" },
  description:
    "Calcula el ROI de implementar IA y automatización en tu empresa. Genera tu propuesta comercial con proyección mes 1 al año 5.",
  openGraph: {
    title: "Genera — Propuesta de IA y Automatización",
    description: "Calcula el ROI de implementar IA y automatización. Proyección mes 1 al año 5.",
    url: "https://genera.dignita.tech",
    siteName: "Genera by Dignita",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
