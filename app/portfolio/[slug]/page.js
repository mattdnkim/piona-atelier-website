export const revalidate = 86400; // regenerate daily

const items = {
  "wedding-bouquets": {
    title: "Wedding Bouquets",
    description: "Signature bridal & bridesmaids bouquets."
  }
};

export async function generateStaticParams() {
  return Object.keys(items).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const item = items[params.slug] ?? { title: "Portfolio" };
  return { title: item.title, description: item.description };
}

export default function PortfolioItem({ params }) {
  const item = items[params.slug];
  if (!item) return <div className="prose"><h1>Not Found</h1></div>;
  return (
    <div className="prose max-w-none">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
}
