import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nature Delight Foundation",
  description: "A mission-driven NGO website",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
