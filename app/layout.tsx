import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safwan Qr code",
  description: "Generated & share QrCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4444982234880637"></meta>
      </head>
      <body className="bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
