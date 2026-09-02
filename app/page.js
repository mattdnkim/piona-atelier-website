// app/page.js
import ContactForm from "../components/ContactForm";

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


      </section>

      {/* Contact section */}
      <section id="contact" className="mt-16 card max-w-4xl mx-auto px-4 md:px-8 py-10 bg-white rounded-xl shadow-sm border border-neutral-100">
        <h2 className="text-2xl font-semibold text-neutral-900">Let’s Design Your Event</h2>
        <p className="text-sm text-neutral-600 mt-1">Fill out the details below, and we will get back to you with a custom floral proposal.</p>

        <ContactForm />
      </section>

    </>
  );
}