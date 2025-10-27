export const revalidate = 3600; // 1 hour during campaign

function EventJSONLD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "K-Flower Car Proposal — Limited Event",
    "startDate": "2025-11-01",
    "endDate": "2025-12-31",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "image": ["https://www.piona-atelier.example/proposal-og.jpg"],
    "description": "Romantic K-flower style car proposal. Limited to 10 bookings. Intro price $99 (was $350).",
    "location": {
      "@type": "Place",
      "name": "Calgary & Area",
      "address": { "@type": "PostalAddress", "addressLocality": "Calgary", "addressRegion": "AB", "addressCountry": "CA" }
    },
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/LimitedAvailability",
      "url": "https://www.piona-atelier.example/events/proposal-99"
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const metadata = {
  title: "K-Flower Car Proposal — $99 Limited",
  description: "Only 10 bookings. White / Pink+White / Purple+White options."
};

export default function ProposalEvent() {
  return (
    <>
      <EventJSONLD />
      <section className="card">
        <h1 className="text-3xl font-semibold">K-Flower Car Proposal — $99 (was $350)</h1>
        <p className="mt-2 text-neutral-700">Only 10 bookings. Colour options: white, pink+white, purple+white.</p>
        <div className="mt-6 flex gap-3">
          <a className="btn" href="/#contact">DM or Book via Form</a>
          <a className="btn" href="https://www.instagram.com/piona.atelier">Follow on Instagram</a>
        </div>
        <p className="mt-4 text-sm text-neutral-500">Event deadline: November 10, 2025. For proposals in Nov/Dec 2025.</p>
      </section>
    </>
  );
}
