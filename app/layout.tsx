import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const alpino = localFont({
  src: "../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export const metadata: Metadata = {
  title: "Fizzi Soda",
  description: "Fizzi app with Next.js/Tailwind/FramerMotion/Tree.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alpino.className} overflow-x-hidden bg-yellow-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
