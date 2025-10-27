export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* 로고 */}
        <a
          href="/"
          className="text-3xl md:text-[2rem] font-semibold text-piona-green tracking-[-0.02em] hover:opacity-90 transition drop-shadow-sm !no-underline decoration-transparent hover:decoration-transparent"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Piona Atelier
        </a>

        {/* 메뉴 + SNS */}
        <div className="flex items-center gap-6 text-sm font-medium text-neutral-700">
          <nav className="flex gap-6">
            <a href="/services" className="hover:text-piona-green">Services</a>
            <a href="/portfolio/wedding-bouquets" className="hover:text-piona-green">Portfolio</a>
            <a href="/events/proposal-99" className="hover:text-piona-green">Events</a>
            <a href="/about" className="hover:text-piona-green">About</a>
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
