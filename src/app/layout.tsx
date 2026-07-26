import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {

title:
"EHBA | Elly's Hair And Beauty Academy & Salon",

description:
"Professional hair and beauty services, salon appointments, and beauty training courses from Elly's Hair And Beauty Academy.",

keywords:[
"hair salon",
"beauty academy",
"beauty courses",
"hair styling",
"beauty training"
]

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
