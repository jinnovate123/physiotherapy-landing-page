import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MoveWell Physiotherapy | Expert Care. Personalized Recovery.",
  description: "Advanced physiotherapy care for pain relief, injury recovery, and long-term wellness. Under the expert care of Dr. Priya Mehta (MPT, BPT) with 15+ years experience.",
  keywords: ["physiotherapy", "rehabilitation", "pain relief", "injury recovery", "manual therapy", "Dr. Priya Mehta", "MoveWell Physiotherapy"],
  authors: [{ name: "Dr. Priya Mehta" }],
  openGraph: {
    title: "MoveWell Physiotherapy | Move Better, Feel Stronger",
    description: "Advanced physiotherapy care for pain relief, injury recovery, and long-term wellness.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
