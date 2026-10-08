/**
 * Coordonnées de l'entreprise — point unique à modifier.
 * Adresse, e-mail et réseaux : valeurs reprises de l'ancien site (chauffa-clim.fr),
 * à remplacer par les informations luxembourgeoises.
 */

type Phone = { display: string; href: string };

/**
 * Numéro en cours de création : tant qu'il vaut `null`, le téléphone est masqué
 * partout sur le site (boutons « Appeler », page contact, footer, menu mobile).
 * Exemple une fois le numéro obtenu : { display: "+352 12 34 56", href: "tel:+352123456" }
 */
const phone: Phone | null = null;

export const site = {
  name: "Chauffaclim",
  baseline: "Luxembourg",
  domain: "chauffaclim-luxembourg.lu",
  url: "https://chauffaclim-luxembourg.lu",
  phone: phone as Phone | null,
  email: "chauffaclim.sarl@gmail.com",
  address: { street: "4 Rue des Potiers d'Etain", zip: "57070", city: "Metz" },
  facebook: "https://www.facebook.com/p/Chauffaclim-61557464862677/",
  instagram: "https://www.instagram.com/chauffaclim.sarl/",
  partners: ["GRDF", "ENGIE", "EDF", "Global Service Renov", "MTS"],
};

export const locales = ["fr", "de", "en"] as const;
export type Locale = (typeof locales)[number];

/** Services affichés. Plomberie, salles de bains et entretien/dépannage retirés à la demande de la cliente. */
export const serviceSlugs = ["chauffage", "climatisation"] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

/** Couleur de survol de chaque service : rouge (heat), bleu (cool) ou les deux (duo). */
export const serviceTone: Record<ServiceSlug, "heat" | "cool" | "duo"> = {
  chauffage: "heat",
  climatisation: "cool",
};

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const isService = (v: string): v is ServiceSlug =>
  (serviceSlugs as readonly string[]).includes(v);
