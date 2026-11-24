import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "مدونة زراعية",
  description:
    "مدونة عربية تهتم بالزراعة والعناية بالنباتات والاستدامة، بمقالات عملية عن التربة والري والمحاصيل.",
  openGraph: {
    title: "مدونة زراعية",
    description:
      "مدونة عربية تهتم بالزراعة والعناية بالنباتات والاستدامة، بمقالات عملية عن التربة والري والمحاصيل.",
    type: "website",
    locale: "ar_MA",
    siteName: "مدونة زراعية",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} flex min-h-screen flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
