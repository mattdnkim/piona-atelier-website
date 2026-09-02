import { EB_Garamond } from 'next/font/google';

// EB Garamond 폰트 설정
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-eb-garamond', // 선택사항 (CSS 변수 활용 시)
});

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* 로고 */}
        <a href="/" className="flex items-center gap-2 transition hover:opacity-90">
          {/* 그림 심볼 로고 */}
          <img
            src="/images/logo.png"
            alt="Piona Atelier Icon"
            className="h-12 w-auto object-contain md:h-16"
          />

          {/* 글씨 로고 (크기 확대) */}
          <img
            src="/images/logofont.png"
            alt="Piona Atelier"
            className="h-12 w-auto object-contain md:h-18" /* 👈 w-auto로 비율을 유지하며 높이 확대 */
          />
        </a>

        {/* 메뉴 목록 */}
        <div className={`flex items-center gap-6 text-base font-medium text-neutral-800 ${ebGaramond.className}`}>          <nav className="flex gap-6">
          <a href="/" className="transition hover:text-piona-green">Home</a>
          <a href="/portfolio/wedding-bouquets" className="transition hover:text-piona-green">Portfolio</a>
          <a href="/events/proposal-99" className="transition hover:text-piona-green">Events</a>
          <a href="/about" className="transition hover:text-piona-green">About</a>
        </nav>

          {/* ✅ 인스타그램 링크 */}
          <a
            href="https://www.instagram.com/pionaatelier"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-piona-green flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z"
              />
              <circle cx="12" cy="12" r="3.25" />
              <circle cx="17" cy="7" r=".75" fill="currentColor" />
            </svg>
            <span className="hidden md:inline">Instagram</span>
          </a>
        </div>
      </div>
    </header>

  );
}
