export const metadata = {
  metadataBase: new URL("https://www.piona-atelier.example"),
  title: {
    default: "Piona Atelier — Calgary Wedding Florist (Silk & Fresh)",
    template: "%s | Piona Atelier"
  },
  description: "Calgary-based wedding & event florist crafting premium silk and fresh florals: bouquets, arches, car proposals, centerpieces.",
  openGraph: {
    type: "website",
    title: "Piona Atelier — Calgary Wedding Florist",
    description: "Silk & fresh floral design for weddings and proposals in Calgary, Banff, and Canmore.",
    url: "https://www.piona-atelier.example",
    siteName: "Piona Atelier",
    locale: "en_CA"
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-CA": "/",
      "ko-KR": "/?lang=ko"
    }
  },
  robots: { index: true, follow: true }
};

import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.className}>
      <body>
        <Nav />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
