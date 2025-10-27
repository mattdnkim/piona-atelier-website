export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.piona-atelier.example/sitemap.xml"
  };
}
