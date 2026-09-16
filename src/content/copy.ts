import type { Lang } from "@/lib/i18n";

export type T3 = Record<Lang, string>;

export const agency = {
  name: "DreamNova.studio",
  person: "David Amor",
  role: "Senior Project Manager",
  phone: "0584921492",
  wa: "https://wa.me/972584921492",
};

export const ui = {
  agency: "DreamNova.studio",
  valid: { he: "בתוקף עד 30.09.2026", fr: "Valable jusqu’au 30.09.2026", en: "Valid through 30.09.2026" } as T3,
  vat: {
    he: "המחירים לפני מע״מ 18% אם חל. המדיה משולמת ישירות לפלטפורמות בכרטיס הלקוח. אין הבטחת פניות, מכירות או דירוג.",
    fr: "Montants HT, TVA 18 % si applicable. Média payé par le client sur sa carte. Aucune promesse de leads, ventes ou ranking.",
    en: "Amounts exclude 18% VAT if applicable. Media paid by the client on their card. No lead, sale or ranking guarantee.",
  } as T3,
  print: { he: "הדפסה / PDF", fr: "Imprimer / PDF", en: "Print / PDF" } as T3,
  home: { he: "שער", fr: "Accueil", en: "Home" } as T3,
  brief: { he: "תיק פנימי", fr: "Brief interne", en: "Internal brief" } as T3,
  nitzan: { he: "הניצן שבגן", fr: "HaNitzan SheBaGan", en: "HaNitzan SheBaGan" } as T3,
  nekuda: { he: "נקודה טובה", fr: "Nekuda Tova", en: "Nekuda Tova" } as T3,
  recommended: { he: "מומלץ לפתיחה", fr: "Recommandé pour démarrer", en: "Recommended start" } as T3,
  month: { he: "לחודש · דמי ניהול", fr: "/ mois · honoraires", en: "/ month · management" } as T3,
  ils: "₪",
  plusMedia: { he: "מדיה בכרטיס הלקוח", fr: "Média sur la carte client", en: "Media on the client card" } as T3,
  enter: { he: "כניסה לאתר", fr: "Entrer dans le site", en: "Enter the site" } as T3,
  whatsapp: { he: "וואטסאפ", fr: "WhatsApp", en: "WhatsApp" } as T3,
  review: {
    he: "הצעה לעיון · ללא התחייבות לתוצאות",
    fr: "Proposition pour examen · aucune garantie de résultats",
    en: "Proposal for review · outcomes are not guaranteed",
  } as T3,
  observed: { he: "נצפה", fr: "Observé", en: "Observed" } as T3,
  action: { he: "פעולה מוצעת", fr: "Action proposée", en: "Proposed action" } as T3,
  illustration: {
    he: "תרחיש להמחשה בלבד — לא תחזית ולא התחייבות",
    fr: "Scénario illustratif seulement — ni prévision ni engagement",
    en: "Illustration only — not a forecast or a commitment",
  } as T3,
};

export const sections = {
  audit: { he: "ביקורת", fr: "Audit", en: "Audit" } as T3,
  market: { he: "שוק", fr: "Marché", en: "Market" } as T3,
  channels: { he: "ערוצים", fr: "Canaux", en: "Channels" } as T3,
  ads: { he: "פרסום", fr: "Publicité", en: "Ads" } as T3,
  offers: { he: "הצעות", fr: "Offres", en: "Offers" } as T3,
  year: { he: "שנה", fr: "Année", en: "Year" } as T3,
  terms: { he: "תנאים", fr: "Conditions", en: "Terms" } as T3,
  contact: { he: "קשר", fr: "Contact", en: "Contact" } as T3,
};

export const hub = {
  private: {
    he: "שער סוכנות פרטי — לא לשלוח ללקוח. לכל לקוח אתר נפרד.",
    fr: "Hub agence privé — ne pas envoyer au client. Un site par client.",
    en: "Private agency gate — do not send to a client. One site per client.",
  } as T3,
  kicker: {
    he: "שני אתרים נפרדים · 16.09.2026",
    fr: "Deux sites séparés · 16.09.2026",
    en: "Two separate sites · 16.09.2026",
  } as T3,
  nitzanRole: {
    he: "גינון · אשדוד והסביבה · מסלול נפרד לירושלים · לעיון צלחיה",
    fr: "Jardinage · Ashdod et environs · Jérusalem à part · dossier Tselahya",
    en: "Landscaping · Ashdod area · separate Jerusalem path · Tselahya review",
  } as T3,
  nekudaRole: {
    he: "ספרי רבי נחמן · בני ברק · 1,000 ₪ + 15% מתוצאה זכאית",
    fr: "Livres de Rabbi Nahman · Bnei Brak · 1 000 ₪ + 15 % du résultat éligible",
    en: "Rabbi Nachman books · Bnei Brak · 1,000 ILS + 15% of eligible result",
  } as T3,
  nitzanFee: "2,000 + 1,000 ₪",
  nekudaFee: "1,000 ₪ + 15%",
};

export const nitzanMeta = {
  client: "הניצן שבגן",
  owner: "ישראל דוב אבודארה",
  ownerLat: "Israel Dov Abudara",
  phone: "058-667-1625",
  wa: "https://wa.me/972586671625",
  site: "https://nitzan-shebagan.co.il/",
  devis: "DN-20260916-G01",
  city: { he: "אשדוד והסביבה · מסלול נפרד לירושלים", fr: "Ashdod et environs · Jérusalem à part", en: "Ashdod area · separate Jerusalem path" } as T3,
  forWhom: {
    he: "הצעת שיווק וצמיחה · לעיון צלחיה · לא נשלחה לגנן",
    fr: "Dossier décision · pour Tselahya · non envoyé au jardinier",
    en: "Decision file · for Tselahya · not sent to the gardener",
  } as T3,
};

export const nekudaMeta = {
  client: "נקודה טובה",
  owner: "ירון דביר",
  ownerLat: "Yaron Dvir",
  phone: "052-953-0053",
  wa: "https://wa.me/972529530053",
  site: "https://nekodatova.co.il/",
  store: { he: "הרב כהנמן 76, קומה א, בני ברק", fr: "76 HaRav Kahaneman, 1er étage, Bnei Brak", en: "76 HaRav Kahaneman, 1st floor, Bnei Brak" } as T3,
  hours: { he: "א׳–ה׳ 11:00–20:00 · ו׳ 11:00–12:30", fr: "Dim–Jeu 11h–20h · Ven 11h–12h30", en: "Sun–Thu 11:00–20:00 · Fri 11:00–12:30" } as T3,
  devis: "DN-20260916-NT01",
  forWhom: {
    he: "מחקר והצעה · לעיון · לא נשלחה ולא נחתמה",
    fr: "Recherche et proposition · pour examen · non envoyée",
    en: "Research and proposal · for review · not sent or signed",
  } as T3,
};
