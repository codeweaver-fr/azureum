import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
