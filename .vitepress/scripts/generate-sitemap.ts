import { writeFileSync } from "fs";
import { join } from "path";

// Update this with your actual domain
const SITE_URL = "https://nest-concept.com";

// List all your pages/routes here
const pages = [
  {
    url: "",
    changefreq: "daily",
    priority: 1.0,
  },
  {
    url: "api-examples",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "markdown-examples",
    changefreq: "weekly",
    priority: 0.8,
  },
];

const lastmod = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const url = page.url ? `${SITE_URL}/${page.url}` : SITE_URL;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

const outputPath = join(process.cwd(), "dist", "sitemap.xml");
writeFileSync(outputPath, sitemap, "utf-8");
console.log("✅ Sitemap generated successfully at:", outputPath);

