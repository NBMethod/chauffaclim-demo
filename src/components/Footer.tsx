import Image from "next/image";
import Link from "next/link";
import { serviceSlugs, site, type Locale } from "@/lib/site";
import type { Dict } from "@/lib/dictionaries";

export function Footer({ locale, t }: { locale: Locale; t: Dict }) {
  return (
    <footer className="bg-ink text-white">
      <div className="duo h-1" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src="/logo.png" alt={`${site.name} ${site.baseline}`} width={1092} height={323} className="h-14 w-auto invert" />
          <p className="mt-5 max-w-xs text-sm text-white/60">{t.footer.tagline}</p>
          <div className="mt-6 flex gap-5 text-sm text-white/80">
            <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
          </div>
        </div>
        <div>
          <p className="eyebrow !text-white/50">{t.nav.services}</p>
          <ul className="mt-5 space-y-2.5 text-sm text-white/80">
            {serviceSlugs.map((s) => (
              <li key={s}>
                <Link href={`/${locale}/services/${s}`} className="hover:text-white">{t.services[s].name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-white/50">{t.nav.contact}</p>
          <address className="mt-5 space-y-2.5 text-sm not-italic text-white/80">
            <p>
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
            <p><a href={site.phoneHref} className="hover:text-white">{site.phoneDisplay}</a></p>
            <p><a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a></p>
            <p className="text-white/50">{t.contact.hours} : {t.contact.hoursValue}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name} {site.baseline}. {t.footer.rights}</p>
          <p>{t.footer.demo}</p>
        </div>
      </div>
    </footer>
  );
}
