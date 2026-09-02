'use client';

import { useState } from 'react';
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur">
      <div className="container flex h-20 items-center justify-between md:h-24">
        {/* 로고 */}
        <a href="/" className="flex items-center gap-2 transition hover:opacity-90">
          <img
            src="/images/logo.png"
            alt="Piona Atelier Icon"
            className="h-12 w-auto object-contain md:h-16"
          />
          <img
            src="/images/logofont.png"
            alt="Piona Atelier"
            className="h-11 w-auto object-contain md:h-20"
          />
        </a>

        {/* 💻 데스크톱 네비게이션 (md 이상) */}
        <div className={`hidden items-center gap-8 text-base font-medium text-neutral-800 md:flex ${ebGaramond.className}`}>
          <nav className="flex gap-6">
            <a href="/" className="transition hover:text-piona-green">Home</a>
            <a href="/portfolio/wedding-bouquets" className="transition hover:text-piona-green">Portfolio</a>
            <a href="/events/proposal-99" className="transition hover:text-piona-green">Events</a>
            <a href="/about" className="transition hover:text-piona-green">About</a>
          </nav>

          <a
            href="https://www.instagram.com/pionaatelier"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-1 transition hover:text-piona-green"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z" />
              <circle cx="12" cy="12" r="3.25" />
              <circle cx="17" cy="7" r=".75" fill="currentColor" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>

        {/* 📱 모바일 토글 버튼 (md 미만) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-neutral-700 hover:text-piona-green md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            /* 닫기 (X) 아이콘 */
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* 햄버거 (☰) 아이콘 */
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* 📱 모바일 드롭다운 메뉴 */}
      {isOpen && (
        <div className={`border-t border-neutral-100 bg-white/95 px-6 py-4 shadow-md md:hidden ${ebGaramond.className}`}>
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-800">
            {/* 💡 모바일 드롭다운에서는 Home을 제외하고 Portfolio부터 표시 */}
            <a
              href="/portfolio/wedding-bouquets"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-piona-green"
            >
              Portfolio
            </a>
            <a
              href="/events/proposal-99"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-piona-green"
            >
              Events
            </a>
            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-piona-green"
            >
              About
            </a>
            <a
              href="https://www.instagram.com/pionaatelier"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 pt-2 border-t border-neutral-100 text-neutral-700 hover:text-piona-green"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z" />
                <circle cx="12" cy="12" r="3.25" />
                <circle cx="17" cy="7" r=".75" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}