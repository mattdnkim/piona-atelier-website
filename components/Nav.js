export default function Nav() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-semibold tracking-wide text-piona-green">Piona Atelier</a>
        <nav className="flex gap-6 text-sm">
          <a href="/services">Services</a>
          <a href="/portfolio/wedding-bouquets">Portfolio</a>
          <a href="/events/proposal-99">Events</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}
