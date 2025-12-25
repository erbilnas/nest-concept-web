import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nest Concept",
  description:
    "Nest Concept - Mimarlık, peyzaj, yapı ve inşaat hizmetleri. Modern ve yenilikçi çözümler için bizimle iletişime geçin.",
  base: "/",
  outDir: "dist",
  cleanUrls: true,

  // SEO Configuration
  lang: "tr",

  head: [
    // Favicon
    ["link", { rel: "icon", href: "/favicon.png" }],

    // Preconnect for performance (helps with SEO indirectly)
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],

    // Viewport
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],

    // Basic Meta Tags
    ["meta", { name: "author", content: "Nest Concept" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "nest concept, mimarlık, peyzaj mimarlığı, yapı, inşaat, mimari tasarım, peyzaj tasarımı, inşaat projeleri, yapı danışmanlığı, mimarlık hizmetleri, peyzaj hizmetleri, inşaat hizmetleri, yapı hizmetleri, Türkiye, İstanbul",
      },
    ],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { name: "googlebot", content: "index, follow" }],

    // Geo-targeting for Turkey
    ["meta", { name: "geo.region", content: "TR" }],
    ["meta", { name: "geo.placename", content: "Turkey" }],
    ["meta", { name: "geo.position", content: "39.9334;32.8597" }],
    ["meta", { name: "ICBM", content: "39.9334, 32.8597" }],

    // Language and Content
    ["meta", { name: "language", content: "Turkish" }],
    ["meta", { "http-equiv": "content-language", content: "tr" }],

    // Open Graph / Facebook
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:title",
        content: "Nest Concept - Mimarlık, Peyzaj, Yapı ve İnşaat Hizmetleri",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Nest Concept - Mimarlık, peyzaj, yapı ve inşaat alanlarında profesyonel hizmetler sunuyoruz. Modern ve yenilikçi çözümler için bizimle iletişime geçin.",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://nest-concept.com/banner/banner-01.png",
      },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    [
      "meta",
      {
        property: "og:image:alt",
        content: "Nest Concept - Modern İş Çözümleri",
      },
    ],
    ["meta", { property: "og:url", content: "https://nest-concept.com" }],
    ["meta", { property: "og:site_name", content: "Nest Concept" }],
    ["meta", { property: "og:locale", content: "tr_TR" }],
    ["meta", { property: "og:locale:alternate", content: "en_US" }],

    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:title",
        content: "Nest Concept - Mimarlık, Peyzaj, Yapı ve İnşaat Hizmetleri",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Nest Concept - Mimarlık, peyzaj, yapı ve inşaat alanlarında profesyonel hizmetler sunuyoruz. Modern ve yenilikçi çözümler için bizimle iletişime geçin.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://nest-concept.com/banner/banner-01.png",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image:alt",
        content: "Nest Concept - Modern İş Çözümleri",
      },
    ],

    // Additional SEO
    ["meta", { name: "theme-color", content: "#493f3a" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-title", content: "Nest Concept" }],

    // Canonical URL
    ["link", { rel: "canonical", href: "https://nest-concept.com" }],

    // Hreflang tags for Turkish
    [
      "link",
      { rel: "alternate", hreflang: "tr", href: "https://nest-concept.com" },
    ],
    [
      "link",
      {
        rel: "alternate",
        hreflang: "x-default",
        href: "https://nest-concept.com",
      },
    ],

    // Structured Data (JSON-LD) for Turkish SEO
    [
      "script",
      {
        type: "application/ld+json",
      },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Nest Concept",
        description:
          "Mimarlık, peyzaj, yapı ve inşaat alanlarında profesyonel hizmetler sunan modern çözümler şirketi",
        url: "https://nest-concept.com",
        logo: "https://nest-concept.com/favicon.png",
        address: {
          "@type": "PostalAddress",
          addressCountry: "TR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Müşteri Hizmetleri",
          availableLanguage: "Turkish",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Nest Concept Hizmetleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mimarlık Hizmetleri",
                description: "Mimari tasarım ve proje yönetimi hizmetleri",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Peyzaj Hizmetleri",
                description: "Peyzaj mimarlığı ve peyzaj tasarımı hizmetleri",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Yapı Hizmetleri",
                description: "Yapı danışmanlığı ve yapı projeleri",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "İnşaat Hizmetleri",
                description: "İnşaat projeleri ve inşaat yönetimi hizmetleri",
              },
            },
          ],
        },
      }),
    ],
    [
      "script",
      {
        type: "application/ld+json",
      },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Nest Concept",
        description:
          "Mimarlık, peyzaj, yapı ve inşaat alanlarında profesyonel hizmetler",
        url: "https://nest-concept.com",
        inLanguage: "tr-TR",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://nest-concept.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }),
    ],

    // Leaflet CSS for map
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
        integrity: "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=",
        crossorigin: "",
      },
    ],
  ],
});
