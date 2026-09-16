import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import type { T3 } from "@/content/copy";
import { agency, ui } from "@/content/copy";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Check, Phone } from "lucide-react";

export function t(map: T3, lang: Lang) {
  return map[lang];
}

export function Section({
  kicker,
  title,
  children,
  id,
}: {
  kicker?: string;
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-28 px-4 py-10 md:py-14">
      {kicker ? (
        <p className="mb-2 text-[11px] font-medium tracking-[0.18em] text-muted uppercase">{kicker}</p>
      ) : null}
      <h2 className="font-display max-w-3xl text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function ReviewBanner({ lang, extra }: { lang: Lang; extra?: string }) {
  return (
    <div className="border-b border-line bg-sand/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2.5 text-[12.5px] leading-snug text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>{t(ui.review, lang)}</span>
        {extra ? <span>{extra}</span> : null}
      </div>
    </div>
  );
}

export function Callout({ children, tone = "ink" }: { children: ReactNode; tone?: "ink" | "warn" }) {
  return (
    <p
      className={cn(
        "rounded-xl border px-4 py-3 text-[13.5px] leading-relaxed",
        tone === "warn" ? "border-warn/30 bg-sand text-ink" : "border-line bg-paper text-muted",
      )}
    >
      {children}
    </p>
  );
}

export function DataTable({
  cols,
  rows,
  caption,
}: {
  cols: string[];
  rows: ReactNode[][];
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-paper">
      {caption ? <p className="border-b border-line px-4 py-2 text-[12px] text-muted">{caption}</p> : null}
      <table className="w-full min-w-[560px] text-start text-[13.5px]">
        <thead className="bg-forest text-paper">
          <tr>
            {cols.map((c) => (
              <th key={c} className="px-4 py-3 font-medium">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line/70 last:border-0 even:bg-sand/40">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn("px-4 py-3 align-top leading-relaxed", j === 0 ? "font-medium text-ink" : "text-muted")}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PhotoStrip({
  caption,
  photos,
}: {
  caption: string;
  photos: { src: string; alt: string }[];
}) {
  return (
    <div>
      <p className="mb-3 text-[12px] text-muted">{caption}</p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {photos.map((p) => (
          <figure key={p.src} className="overflow-hidden rounded-lg border border-line bg-paper">
            <img src={p.src} alt={p.alt} className="h-36 w-full object-cover md:h-44" />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function PlanCard({
  lang,
  name,
  tag,
  fee,
  media,
  extra,
  total,
  includes,
  recommended,
  tone,
}: {
  lang: Lang;
  name: string;
  tag: string;
  fee: number;
  media: string;
  extra?: string;
  total?: string;
  includes: string[];
  recommended?: boolean;
  tone: "navy" | "forest" | "wine";
}) {
  const bar = tone === "navy" ? "bg-navy" : tone === "wine" ? "bg-wine" : "bg-forest";
  return (
    <article
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl border bg-paper",
        recommended ? "border-forest shadow-[0_12px_40px_-24px_rgba(30,61,50,0.55)]" : "border-line",
      )}
    >
      <div className={cn("h-1.5 w-full", bar)} />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-display text-xl font-semibold">{name}</p>
            <p className="mt-1 text-[13px] text-muted">{tag}</p>
          </div>
          {recommended ? <Badge tone="forest">{t(ui.recommended, lang)}</Badge> : null}
        </div>
        <p className="mt-5 font-display text-4xl font-semibold tabular-nums tracking-tight">
          {fee.toLocaleString("he-IL")}
          <span className="ms-1 text-lg font-medium text-muted">₪</span>
        </p>
        <p className="text-[13px] text-muted">{t(ui.month, lang)}</p>
        <p className="mt-2 text-[13px] text-ink">
          {t(ui.plusMedia, lang)} · {media} ₪
        </p>
        {extra ? <p className="mt-1 text-[13px] text-wine">{extra}</p> : null}
        {total ? (
          <p className="mt-3 rounded-md bg-sand px-3 py-2 text-[13px]">
            {lang === "he" ? "סה״כ לפני מסים" : lang === "fr" ? "Total HT" : "Total before tax"}:{" "}
            <b className="tabular-nums">{total} ₪</b>
          </p>
        ) : null}
        <ul className="mt-5 flex-1 space-y-2.5">
          {includes.map((item) => (
            <li key={item} className="flex gap-2 text-[13.5px] leading-snug">
              <Check className="mt-0.5 size-4 shrink-0 text-forest" strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ContactBar({
  devis,
  lang,
  tone = "forest",
}: {
  devis: string;
  lang: Lang;
  tone?: "forest" | "wine" | "navy";
}) {
  const bg = tone === "wine" ? "bg-wine" : tone === "navy" ? "bg-navy" : "bg-forest";
  const fg = tone === "wine" ? "text-wine" : tone === "navy" ? "text-navy" : "text-forest";
  return (
    <div className="no-print mx-auto max-w-6xl px-4 pb-24 md:pb-12">
      <div
        className={cn(
          "flex flex-col items-start justify-between gap-4 rounded-xl px-5 py-5 text-paper md:flex-row md:items-center",
          bg,
        )}
      >
        <div>
          <p className="font-display text-lg font-semibold">{agency.name}</p>
          <p className="text-[13px] text-paper/80">
            {agency.person} · {agency.role} · {agency.phone}
          </p>
          <p className="mt-1 text-[12px] text-paper/70">
            {devis} · {t(ui.valid, lang)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={`tel:${agency.phone}`}>
            <Button variant="outline" className={cn("border-paper/20 bg-paper hover:bg-sand", fg)}>
              <Phone className="size-4" />
              {agency.phone}
            </Button>
          </a>
          <a href={agency.wa} target="_blank" rel="noreferrer">
            <Button className={cn("bg-paper hover:bg-sand", fg)}>{t(ui.whatsapp, lang)}</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export function SourceList({
  items,
  lang,
}: {
  items: { n: string; t: T3; href: string }[];
  lang: Lang;
}) {
  return (
    <ol className="space-y-2 text-[13px] leading-relaxed text-muted">
      {items.map((s) => (
        <li key={s.n} className="flex gap-2">
          <span className="tabular-nums text-subtle">[{s.n}]</span>
          <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-ink">
            {t(s.t, lang)}
          </a>
        </li>
      ))}
    </ol>
  );
}
