import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { STORAGE_KEY, dirOf, type Lang } from "./i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "rtl" | "ltr";
};

const LangContext = createContext<Ctx | null>(null);

function readStored(): Lang {
  if (typeof window === "undefined") return "he";
  const v = window.localStorage.getItem(STORAGE_KEY);
  if (v === "he" || v === "fr" || v === "en") return v;
  return "he";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("he");

  useEffect(() => {
    setLangState(readStored());
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l === "he" ? "he" : l;
    document.documentElement.dir = dirOf(l);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "he" ? "he" : lang;
    document.documentElement.dir = dirOf(lang);
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, dir: dirOf(lang) }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
