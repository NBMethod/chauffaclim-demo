import { siFacebook, siInstagram } from "simple-icons";
import { site } from "@/lib/site";

const networks = [
  { label: "Facebook", href: site.facebook, path: siFacebook.path },
  { label: "Instagram", href: site.instagram, path: siInstagram.path },
];

/** Icônes cliquables vers les réseaux sociaux. `tone="dark"` pour un fond noir. */
export function SocialLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const style =
    tone === "dark"
      ? "border-white/20 text-white/80 hover:border-white hover:bg-white hover:text-ink"
      : "border-line text-ink hover:border-ink hover:bg-ink hover:text-white";
  return (
    <ul className="flex gap-3">
      {networks.map((n) => (
        <li key={n.label}>
          <a
            href={n.href}
            target="_blank"
            rel="noreferrer"
            aria-label={n.label}
            title={n.label}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${style}`}
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
              <path d={n.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
