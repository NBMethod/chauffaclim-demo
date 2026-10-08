import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/Social";
import { getDict } from "@/lib/dictionaries";
import { reveal } from "@/lib/reveal";
import { isLocale, site } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { title: getDict(locale).nav.contact } : {};
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);
  const c = t.contact;

  const rows: [string, React.ReactNode][] = [
    ...(site.phone
      ? [[c.phone, <a key="p" href={site.phone.href} className="hover:underline">{site.phone.display}</a>] as [string, React.ReactNode]]
      : []),
    [c.email, <a key="e" href={`mailto:${site.email}`} className="break-all hover:underline">{site.email}</a>],
    [c.address, <>{site.address.street}<br />{site.address.zip} {site.address.city}</>],
    [c.hours, <span key="h" className="whitespace-pre-line">{c.hoursValue}</span>],
    [c.follow, <div key="f" className="mt-1"><SocialLinks tone="dark" /></div>],
  ];

  return (
    <section className="container-x py-20 md:py-24">
      <p className="eyebrow" {...reveal(0)}>{c.eyebrow}</p>
      <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-6xl" {...reveal(1)}>
        {c.title}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted" {...reveal(2)}>{c.sub}</p>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl border border-line bg-white p-6 md:p-10" {...reveal(2)}>
          <ContactForm t={c} services={t.services} />
        </div>
        <dl className="h-fit rounded-3xl bg-ink p-8 text-white md:p-10" {...reveal(3)}>
          {rows.map(([label, value]) => (
            <div key={label} className="border-b border-white/10 py-5 first:pt-0 last:border-0 last:pb-0">
              <dt className="eyebrow !text-white/50">{label}</dt>
              <dd className="mt-2 text-lg">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
