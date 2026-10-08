import type { MetadataRoute } from "next";
import { locales, serviceSlugs, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", ...serviceSlugs.map((s) => `/services/${s}`), "/contact"];
  return locales.flatMap((l) =>
    paths.map((p) => ({
      url: `${site.url}/${l}${p}`,
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${site.url}/${x}${p}`])) },
    })),
  );
}
