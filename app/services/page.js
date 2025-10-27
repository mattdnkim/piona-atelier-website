export const revalidate = 86400;

export const metadata = {
  title: "Services",
  description: "Wedding florals, car proposals, arches, centerpieces, and bud vases."
};

export default function Services() {
  return (
    <div className="prose max-w-none">
      <h1>Services</h1>
      <ul>
        <li>Silk & Fresh bouquets</li>
        <li>Arches & ceremony backdrops</li>
        <li>Centerpieces & bud vase sets</li>
        <li>Car proposal decoration</li>
      </ul>
    </div>
  );
}
