export type Lang = "he" | "fr" | "en";

export const LANGS: { id: Lang; label: string; dir: "rtl" | "ltr" }[] = [
  { id: "he", label: "עברית", dir: "rtl" },
  { id: "fr", label: "FR", dir: "ltr" },
  { id: "en", label: "EN", dir: "ltr" },
];

export const STORAGE_KEY = "dn-lang";

export function dirOf(lang: Lang): "rtl" | "ltr" {
  return lang === "he" ? "rtl" : "ltr";
}

export function pick<T extends Record<Lang, string>>(map: T, lang: Lang): string {
  return map[lang];
}
