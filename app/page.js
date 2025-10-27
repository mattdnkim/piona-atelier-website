// app/page.js
export const revalidate = 86400; // SSG with daily ISR

function LocalBusinessJSONLD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Piona Atelier",
    "image": "https://www.piona-atelier.example/og.jpg",
    "url": "https://www.piona-atelier.example",
    "telephone": "+1-403-000-0000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "areaServed": ["Calgary", "Banff", "Canmore"],
    "sameAs": ["https://www.instagram.com/piona.atelier"]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <LocalBusinessJSONLD />

      {/* Background section (single soft image) */}
      <section className="relative rounded-2xl overflow-hidden min-h-[80vh] md:min-h-[90vh] pt-24 md:pt-32">

        {/* Single background image */}
        <img
          src="/images/bg-soft.jpg"
          alt="Piona Atelier portfolio background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="lazy"
        />

        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/25" />

        {/* About overlay (transparent text, no white box) */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="max-w-3xl text-white drop-shadow-md">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Us</h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              Piona Atelier is a Calgary-based wedding & event floral studio crafting elegant
              <span className="whitespace-nowrap"> silk & fresh </span>arrangements—bouquets, arches,
              centerpieces, and romantic car proposals. We design with refined palettes and natural
              textures for effortless, modern florals across Calgary, Banff, and Canmore.
            </p>
            {/* <div className="mt-6 flex justify-center gap-4">
              <a
                className="btn bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40"
                href="/portfolio/wedding-bouquets"
              >
                View Portfolio
              </a>
              <a className="btn bg-piona-green hover:opacity-90" href="/#contact">
                Get a Quote
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="mt-16 card">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-sm text-neutral-600">DM on Instagram or send the form below.</p>
        <form action="/api/contact" method="post" className="mt-6 grid gap-4">
          <input name="name" required placeholder="Your name" className="border rounded-lg px-3 py-2" />
          <input name="email" type="email" required placeholder="Email" className="border rounded-lg px-3 py-2" />
          <textarea name="message" rows="4" placeholder="Tell us about your event" className="border rounded-lg px-3 py-2" />
          <button className="btn" type="submit">Send</button>
        </form>
      </section>
    </>
  );
}
