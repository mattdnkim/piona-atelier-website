export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 shadow-sm">
      <div className="container flex items-center justify-between h-16 pt-10">
        <a
          href="/"
          className="font-[Playfair_Display] text-3xl md:text-[2rem] font-semibold text-piona-green tracking-[-0.02em] hover:opacity-90 transition drop-shadow-sm no-underline"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Piona Atelier
        </a>


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
