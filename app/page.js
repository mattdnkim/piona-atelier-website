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
      <section id="contact" className="mt-16 card max-w-4xl mx-auto px-4 md:px-8 py-10 bg-white rounded-xl shadow-sm border border-neutral-100">
        <h2 className="text-2xl font-semibold text-neutral-900">Let’s Design Your Event</h2>
        <p className="text-sm text-neutral-600 mt-1">Fill out the details below, and we will get back to you with a custom floral proposal.</p>

        <form action="/api/contact" method="post" className="mt-8 grid gap-6 md:grid-cols-2">

          {/* 1. Client Name */}
          <div className="md:col-span-1">
            <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Your Name *</label>
            <input
              id="contact-name"
              name="name"
              required
              placeholder="First and last name"
              className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>

          {/* 2. Email Address */}
          <div className="md:col-span-1">
            <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Email Address *</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="hello@example.com"
              className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>

          {/* 3. Event Type */}
          <div className="md:col-span-1">
            <label htmlFor="contact-event-type" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Event Type *</label>
            <select
              id="contact-event-type"
              name="eventType"
              required
              defaultValue=""
              className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400 invalid:text-neutral-400"
            >
              <option value="" disabled hidden>Select an option</option>
              <option value="wedding">Wedding</option>
              <option value="private">Private Gathering</option>
              <option value="corporate">Corporate Event</option>
              <option value="birthday">Birthday Party</option>
              <option value="other">Other Celebration</option>
            </select>
          </div>

          {/* 4. Event Date */}
          <div className="md:col-span-1">
            <label htmlFor="contact-date" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Event Date *</label>
            <input
              id="contact-date"
              name="eventDate"
              type="date"
              required
              className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>

          {/* 5. Venue Details */}
          <div className="md:col-span-1">
            <label htmlFor="contact-venue" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Venue / Location *</label>
            <input
              id="contact-venue"
              name="venue"
              required
              placeholder="e.g., Fairmont Banff Springs, Calgary home"
              className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>

          {/* 6. Event Size (Guest Count) */}
          <div className="md:col-span-1">
            <label htmlFor="contact-size" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Estimated Guest Count</label>
            <select
              id="contact-size"
              name="guestCount"
              defaultValue=""
              className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              <option value="" disabled hidden>Select headcount range</option>
              <option value="intimate">Intimate (Under 20 guests)</option>
              <option value="small">Small (20 - 50 guests)</option>
              <option value="medium">Medium (50 - 150 guests)</option>
              <option value="large">Large (150+ guests)</option>
            </select>
          </div>

          {/* 7. Rough Budget Range */}
          <div className="md:col-span-1">
            <label htmlFor="contact-budget" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Rough Floral Budget (CAD)</label>
            <select
              id="contact-budget"
              name="budget"
              defaultValue=""
              className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              <option value="" disabled hidden>Select budget tier</option>
              <option value="under-1k">Under $1,000</option>
              <option value="1k-3k">$1,000 – $3,000</option>
              <option value="3k-6k">$3,000 – $6,000</option>
              <option value="6k-plus">$6,000+</option>
            </select>
          </div>

          {/* 8. Colour & Aesthetic Theme */}
          <div className="md:col-span-1">
            <label htmlFor="contact-theme" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Colour Scheme & Theme</label>
            <input
              id="contact-theme"
              name="theme"
              placeholder="e.g., Blush & Sage, modern minimalist, moody romantic"
              className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>

          {/* 9. Needed Arrangements (Checkboxes for easier choice) */}
          <div className="md:col-span-2">
            <span className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-3">Arrangements You Need</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'Bridal Bouquet', value: 'bridal-bouquet' },
                { label: 'Bridesmaids Bouquets', value: 'bridesmaids' },
                { label: 'Boutonnieres / Corsages', value: 'boutonnieres' },
                { label: 'Ceremony Arch / Backdrop', value: 'arch' },
                { label: 'Table Centerpieces', value: 'centerpieces' },
              ].map((item) => (
                <label key={item.value} className="flex items-center gap-3 px-3 py-2 border border-neutral-100 rounded-lg cursor-pointer hover:bg-neutral-50 text-neutral-800 text-sm transition">
                  <input
                    type="checkbox"
                    name="arrangements"
                    value={item.value}
                    className="w-4 h-4 rounded text-neutral-900 focus:ring-neutral-400 border-neutral-300"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 10. Additional Event Notes */}
          <div className="md:col-span-2">
            <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Additional Event Notes & Vision</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              placeholder="Tell us any specific flower requests, installations, or stylistic preferences..."
              className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end mt-2">
            <button className="btn bg-neutral-900 text-white font-medium px-8 py-3 rounded-lg hover:bg-neutral-800 transition shadow-sm w-full md:w-auto" type="submit">
              Submit Inquiry
            </button>
          </div>
        </form>
      </section>

    </>
  );
}
