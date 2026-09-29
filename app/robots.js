export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://arzooahmed01.netlify.app/sitemap.xml",
    host: "https://arzooahmed01.netlify.app",
  };
}
