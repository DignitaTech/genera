import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://genera.dignita.tech/sitemap.xml",
    host: "https://genera.dignita.tech",
  };
}
