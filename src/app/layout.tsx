import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Live Docs",
  description: "Your go-to collaborator editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
