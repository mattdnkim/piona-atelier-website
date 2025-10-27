// app/layout.js
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
    <html lang="en">{/* 전체에 적용하려면 className={playfair.className} 로 변경 */}
      <body>
        <Nav />
        {/* ✅ fixed Nav 겹침 방지 */}
        <div className="h-16 md:h-20" aria-hidden="true" />
        {/* ✅ 홈 히어로 풀폭 유지: container 제거, 패딩은 공통 py-8 */}
        <main className="py-3">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
