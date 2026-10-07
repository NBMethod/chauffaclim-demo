"use client";

import { serviceSlugs, site } from "@/lib/site";
import type { Dict } from "@/lib/dictionaries";

const field =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-ink";

/**
 * Formulaire de démonstration : ouvre le client mail du visiteur avec la demande pré-remplie.
 * À brancher sur un vrai envoi (route API, Resend, n8n…) pour la mise en production.
 */
export function ContactForm({ t, services }: { t: Dict["contact"]; services: Dict["services"] }) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `${t.name} : ${d.get("name")}`,
      `${t.email} : ${d.get("email")}`,
      `${t.phone} : ${d.get("phone")}`,
      `${t.service} : ${d.get("service")}`,
      "",
      String(d.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${site.name} — ${d.get("service")}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm">
        {t.name}
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="text-sm">
        {t.phone}
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="text-sm">
        {t.email}
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="text-sm">
        {t.service}
        <select name="service" className={field}>
          {serviceSlugs.map((s) => (
            <option key={s}>{services[s].name}</option>
          ))}
        </select>
      </label>
      <label className="text-sm sm:col-span-2">
        {t.message}
        <textarea name="message" rows={5} required className={field} />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-dark">
          {t.send}
        </button>
      </div>
    </form>
  );
}
