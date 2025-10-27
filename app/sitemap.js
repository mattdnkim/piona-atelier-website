export default async function sitemap() {
  const base = "https://www.piona-atelier.example";
  const routes = ["", "/services", "/about", "/events/proposal-99", "/portfolio/wedding-bouquets"];
  return routes.map((r) => ({
    url: base + r,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1.0 : 0.7
  }));
}
