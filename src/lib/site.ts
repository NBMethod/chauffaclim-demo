/**
 * Coordonnées de l'entreprise — point unique à modifier.
 * Valeurs reprises du site actuel (chauffa-clim.fr), à mettre à jour
 * avec les informations luxembourgeoises.
 */
export const site = {
  name: "Chauffaclim",
  baseline: "Luxembourg",
  phoneDisplay: "03 87 74 06 68",
  phoneHref: "tel:+33387740668",
  email: "chauffaclim.sarl@gmail.com",
  serviceEmail: "contact@chauffaclimservices.com",
  address: { street: "4 Rue des Potiers d'Etain", zip: "57070", city: "Metz" },
  facebook: "https://www.facebook.com/p/Chauffaclim-61557464862677/",
  instagram: "https://www.instagram.com/chauffaclim.sarl/",
  certifications: ["RGE", "QualiPAC", "Qualibat"],
  partners: ["GRDF", "ENGIE", "EDF", "Global Service Renov", "MTS"],
} as const;

export const locales = ["fr", "de", "en"] as const;
export type Locale = (typeof locales)[number];

export const serviceSlugs = [
  "chauffage",
  "climatisation",
  "plomberie",
  "salles-de-bains",
  "entretien-depannage",
] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const isService = (v: string): v is ServiceSlug =>
  (serviceSlugs as readonly string[]).includes(v);
