import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./app.scss";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Insights",
  description: "Stocks insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen`}>{children}</body>
    </html>
  );
}
