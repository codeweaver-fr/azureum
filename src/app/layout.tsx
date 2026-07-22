import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-interface",
});

const cormorantGaramond = Cormorant_Garamond({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-editorial",
});

export const metadata: Metadata = {
  title: "AZUREUM — Socle technique",
  description: "Fondations techniques d'AZUREUM V1.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${cormorantGaramond.variable}`}>
        {children}
      </body>
    </html>
  );
}
