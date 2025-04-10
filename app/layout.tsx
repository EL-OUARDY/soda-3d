import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ViewCanvas from "@/components/ViewCanvas";
import ReactLenis from "lenis/react";

const alpino = localFont({
  src: "../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export const metadata: Metadata = {
  title: "Burst Soda",
  description: "Burst app with Next.js/Tailwind/GSAP/Tree.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body
          className={`${alpino.className} overflow-x-hidden bg-yellow-300 antialiased`}
        >
          {children}
          <ViewCanvas />
        </body>
      </html>
    </ReactLenis>
  );
}
