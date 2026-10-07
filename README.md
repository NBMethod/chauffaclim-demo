# Chauffaclim Luxembourg — démo

Maquette multi-pages (Next.js 15, App Router, TypeScript, Tailwind CSS v4), en FR / DE / EN.

```powershell
pnpm install   # ou npm install
pnpm dev       # http://localhost:3000
```

## Où modifier quoi

- `src/lib/site.ts` : coordonnées (téléphone, e-mails, adresse, réseaux), certifications, partenaires. **Valeurs actuelles reprises de chauffa-clim.fr, à remplacer par les informations luxembourgeoises.**
- `src/lib/dictionaries.ts` : tous les textes, par langue.
- `src/app/globals.css` : couleurs (`--color-heat`, `--color-cool`) et styles de base.
- `public/logo.png`, `public/mark.png` : logo détouré depuis le JPEG fourni. À remplacer par le fichier vectoriel (SVG) dès qu'il est disponible.

## Pages

`/{fr|de|en}` · `/services` · `/services/{chauffage|climatisation|plomberie|salles-de-bains|entretien-depannage}` · `/contact`

## À prévoir avant mise en production

- Formulaire de contact : ouvre actuellement le client mail (`mailto:`), à brancher sur un vrai envoi.
- Mentions légales, politique de confidentialité, photos de réalisations.
- Relecture des traductions DE / EN.
