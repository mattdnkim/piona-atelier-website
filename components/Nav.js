export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 shadow-sm">
      {/* ✅ pt-10 제거 → 불필요한 여백 제거 */}
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* ✅ 로고 */}
        <a
          href="/"
          className="text-3xl md:text-[2rem] font-semibold text-piona-green tracking-[-0.02em] hover:opacity-90 transition drop-shadow-sm !no-underline decoration-transparent hover:decoration-transparent"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Piona Atelier
        </a>

        {/* ✅ 메뉴 */}
        <nav className="flex gap-6 text-sm font-medium text-neutral-700">
          <a href="/services" className="hover:text-piona-green">Services</a>
          <a href="/portfolio/wedding-bouquets" className="hover:text-piona-green">Portfolio</a>
          <a href="/events/proposal-99" className="hover:text-piona-green">Events</a>
          <a href="/about" className="hover:text-piona-green">About</a>
        </nav>
      </div>
    </header>
  );
}
