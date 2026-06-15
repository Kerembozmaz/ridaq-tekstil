import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RIDAQ Collezione | Toptan Tişört ve Tekstil Ürünleri",
  description:
    "RIDAQ Collezione, İstanbul merkezli toptan tişört ve tekstil ürünleri tedarikçisidir. Toptan basic tişört, oversize tişört ve tekstil çözümleri sunar.",
  keywords: [
    "RIDAQ Collezione",
    "RIDAQ Tekstil",
    "toptan tişört",
    "toptan tekstil",
    "basic tişört",
    "oversize tişört",
    "İstanbul tekstil",
    "Sultangazi tekstil",
  ],
    verification: {
    google: "oHVAHbC-xhEuKSKn7RKTLD_F0BsuggH3TjKjPmSigNg",
  },

  alternates: {
    canonical: "https://ridaqcollezione.com",
  },
  openGraph: {
    title: "RIDAQ Collezione | Toptan Tişört ve Tekstil Ürünleri",
    description:
      "İstanbul merkezli toptan tişört ve tekstil ürünleri tedarikçisi.",
    url: "https://ridaqcollezione.com",
    siteName: "RIDAQ Collezione",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
