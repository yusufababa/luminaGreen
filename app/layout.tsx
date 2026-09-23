import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina Green 360 | Waste Pickup & Cleaning in Maiduguri",
  description:
    "Sell or donate recyclable waste and book affordable waste pickup and cleaning services across Maiduguri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          displayFont.variable,
          bodyFont.variable,
          "bg-[#f3f4f5] antialiased",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
