import { createFileRoute, redirect } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/lang";
import { nitzanMeta, ui } from "@/content/copy";
import {
  nitzanAds,
  nitzanAudit,
  nitzanClose,
  nitzanCreatives,
  nitzanFunnel,
  nitzanGeo,
  nitzanHero,
  nitzanLead,
  nitzanMarket,
  nitzanPlans,
  nitzanPrices,
  nitzanPricing,
  nitzanScenarios,
  nitzanSeo,
  nitzanSiteFix,
  nitzanSources,
  nitzanTerms,
  nitzanTests,
  nitzanVat,
  nitzanVideo,
  nitzanYear,
  nitzanYearNote,
} from "@/content/nitzan";
import { Callout, ContactBar, DataTable, PhotoStrip, PlanCard, ReviewBanner, Section, SourceList, t } from "@/components/proposal";
import { ScenarioBlock } from "@/components/roi";
import { Badge } from "@/components/ui/badge";
import { deploySite } from "@/lib/site-mode";

export const Route = createFileRoute("/nitzan")({
  beforeLoad: () => {
    if (deploySite === "nekuda") throw redirect({ to: "/" });
  },
  component: NitzanPage,
  head: () => ({
    meta: [
      { title: "הניצן שבגן — הצעת שיווק וצמיחה" },
      {
        name: "description",
        content: "הצעה לעיון לצלחיה. אשדוד והסביבה, מסלול נפרד לירושלים. בסיס 2,000 + מדיה 1,000 ₪. אין הבטחת פניות.",
      },
    ],
  }),
});

export function NitzanPage() {
  const { lang } = useLang();
  return (
    <main id="top">
      <ReviewBanner lang={lang} extra={t(nitzanMeta.forWhom, lang)} />
      <header className="relative min-h-[22rem] overflow-hidden text-paper md:min-h-[28rem]">
        <img src="/media/nitzan-hero.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Badge tone="ink" className="bg-paper/15 text-paper">
            {nitzanMeta.devis}
          </Badge>
          <p className="mt-4 text-[13px] tracking-wide text-paper/70">
            {nitzanMeta.owner} · {t(nitzanMeta.city, lang)}
          </p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            {nitzanMeta.client}
          </h1>
          <p className="font-display mt-4 max-w-2xl text-lg text-paper/90">{t(nitzanHero, lang)}</p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-paper/75">{t(nitzanLead, lang)}</p>
          <p className="mt-5 text-[11px] tracking-wide text-paper/55">
            {lang === "he"
              ? "צילום מהאתר הניצן שבגן"
              : lang === "fr"
                ? "Photo originale du site HaNitzan SheBaGan"
                : "Original photo from nitzan-shebagan.co.il"}
          </p>
        </div>
      </header>

      <Section id="audit" kicker="01" title={t(nitzanAudit.title, lang)}>
        <Callout>{t(nitzanAudit.scope, lang)}</Callout>
        <div className="mt-6">
          <DataTable
            cols={[t(ui.observed, lang), t(ui.action, lang)]}
            rows={nitzanAudit.findings.map((f) => [
              <span key="f">
                <Badge tone={f.p === "P0" ? "wine" : "ink"} className="mb-2">
                  {f.p}
                </Badge>
                <span className="block">{t(f.find, lang)}</span>
              </span>,
              t(f.act, lang),
            ])}
          />
        </div>
        <p className="mt-5 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nitzanAudit.keep, lang)}</p>
      </Section>

      <Section id="funnel" kicker="02" title={t(nitzanFunnel.title, lang)}>
        <p className="max-w-3xl text-[15px] leading-relaxed">{t(nitzanFunnel.path, lang)}</p>
        <div className="mt-6">
          <DataTable
            cols={[lang === "he" ? "אירוע" : lang === "fr" ? "Événement" : "Event", lang === "he" ? "משמעות" : lang === "fr" ? "Sens" : "Meaning"]}
            rows={nitzanFunnel.events.map((e) => [t(e.k, lang), t(e.v, lang)])}
          />
        </div>
        <p className="mt-5 max-w-3xl text-[13.5px] leading-relaxed text-muted">{t(nitzanFunnel.note, lang)}</p>
      </Section>

      <Section
        id="mock"
        kicker="03"
        title={lang === "he" ? "כיוון לעמוד הבית — לא שינוי שבוצע" : lang === "fr" ? "Direction page d’accueil — pas un changement déjà fait" : "Homepage direction — not a change already made"}
      >
        <MockHome lang={lang} />
        <p className="mt-5 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nitzanSiteFix, lang)}</p>
      </Section>

      <Section id="market" kicker="04" title={t(nitzanMarket.title, lang)}>
        <div className="mb-8">
          <PhotoStrip
            caption={
              lang === "he"
                ? "תיק עבודות מהאתר — גינות, גגות ומרפסות שצולמו בשטח"
                : lang === "fr"
                  ? "Portfolio du site client — photos de chantiers réels"
                  : "Portfolio from the client site — real job photos"
            }
            photos={[
              { src: "/media/nitzan/hero.jpg", alt: "גינה — הניצן שבגן" },
              { src: "/media/nitzan/terrace.jpg", alt: "גינת גג — הניצן שבגן" },
              { src: "/media/nitzan/pool.jpg", alt: "בריכה ותאורה — הניצן שבגן" },
              { src: "/media/nitzan/wall.jpg", alt: "קיר פטוניות — הניצן שבגן" },
              { src: "/media/nitzan/mango.jpg", alt: "עץ מנגו — הניצן שבגן" },
              { src: "/media/nitzan/p05.jpg", alt: "עבודה מהשטח — הניצן שבגן" },
            ]}
          />
        </div>
        <p className="mb-6 max-w-3xl text-[15px] leading-relaxed">{t(nitzanMarket.intro, lang)}</p>
        <DataTable
          cols={[
            lang === "he" ? "שחקן / מקור" : lang === "fr" ? "Acteur / source" : "Player / source",
            lang === "he" ? "מה נצפה" : lang === "fr" ? "Observé" : "Observed",
            lang === "he" ? "איך להיבדל" : lang === "fr" ? "Différenciation" : "How to differ",
          ]}
          rows={nitzanMarket.rows.map((row) => [t(row.k, lang), t(row.v, lang), t(row.rec, lang)])}
        />
        <h3 className="font-display mt-10 text-xl font-semibold">{t(nitzanGeo.title, lang)}</h3>
        <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nitzanGeo.note, lang)}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {nitzanGeo.tests.map((g) => (
            <div key={g.id} className="rounded-xl border border-line bg-paper p-5">
              <p className="text-xs font-medium tracking-wide text-navy">{g.id}</p>
              <p className="font-display mt-1 text-lg font-semibold">{t(g.name, lang)}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{t(g.who, lang)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="ads" kicker="05" title={t(nitzanAds.title, lang)}>
        <div className="space-y-4">
          {nitzanAds.channels.map((c) => (
            <div key={c.k.en} className="rounded-xl border border-line bg-paper p-5">
              <p className="font-display text-lg font-semibold">{t(c.k, lang)}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{t(c.v, lang)}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Callout tone="warn">{t(nitzanAds.budget, lang)}</Callout>
        </div>
        <h3 className="font-display mt-10 text-xl font-semibold">{t(nitzanTests.title, lang)}</h3>
        <div className="mt-4">
          <DataTable
            cols={[lang === "he" ? "קבוצה" : lang === "fr" ? "Groupe" : "Group", lang === "he" ? "מילות מפתח / שלילות" : "Keywords / negatives"]}
            rows={nitzanTests.search.map((s) => [t(s.k, lang), s.v])}
          />
        </div>
        <p className="mt-5 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nitzanTests.protocol, lang)}</p>
        <h3 className="font-display mt-10 text-xl font-semibold">
          {lang === "he" ? "יצירות מוכנות לבדיקה" : lang === "fr" ? "Créatifs prêts à tester" : "Creatives ready to test"}
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {nitzanCreatives.map((c) => (
            <blockquote key={c.t.en} className="rounded-xl border border-line bg-paper p-5">
              <p className="text-xs font-medium tracking-wide text-navy">{t(c.t, lang)}</p>
              <p className="mt-3 text-[14px] leading-relaxed">{t(c.body, lang)}</p>
            </blockquote>
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nitzanVideo, lang)}</p>
      </Section>

      <Section
        id="offers"
        kicker="06"
        title={lang === "he" ? "שלושה מסלולי ניהול" : lang === "fr" ? "Trois plans de gestion" : "Three management plans"}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {nitzanPlans.map((p) => (
            <PlanCard
              key={p.id}
              lang={lang}
              name={t(p.name, lang)}
              tag={t(p.tag, lang)}
              fee={p.fee}
              media={p.media}
              total={p.total}
              includes={p.includes.map((x) => t(x, lang))}
              recommended={"recommended" in p && Boolean(p.recommended)}
              tone={p.tone}
            />
          ))}
        </div>
        <p className="mt-6 text-[13px] text-muted">{t(ui.vat, lang)}</p>
        <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nitzanPricing, lang)}</p>
      </Section>

      <Section id="prices" kicker="07" title={t(nitzanPrices.title, lang)}>
        <DataTable
          cols={[
            lang === "he" ? "שירות" : lang === "fr" ? "Prestation" : "Service",
            lang === "he" ? "ייחוס ציבורי" : lang === "fr" ? "Référence publique" : "Public reference",
            lang === "he" ? "טווח בדיקה פנימי" : lang === "fr" ? "Fourchette de test" : "Internal test range",
          ]}
          rows={nitzanPrices.rows.map((r) => [t(r.k, lang), t(r.v, lang), t(r.rec, lang)])}
        />
        <div className="mt-5">
          <Callout tone="warn">{t(nitzanPrices.jerusalem, lang)}</Callout>
        </div>
      </Section>

      <Section id="year" kicker="08" title={t(nitzanScenarios.title, lang)}>
        <ScenarioBlock
          lang={lang}
          intro={t(nitzanScenarios.intro, lang)}
          cols={nitzanScenarios.cols[lang]}
          rows={nitzanScenarios.rows[lang]}
          note={t(nitzanScenarios.viability, lang)}
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {nitzanYear.map((y, i) => (
            <li key={y.t.en} className="rounded-xl border border-line bg-paper p-5">
              <p className="text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
              <p className="font-display mt-1 text-lg font-semibold">{t(y.t, lang)}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{t(y.d, lang)}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nitzanYearNote, lang)}</p>
      </Section>

      <Section id="vat" kicker="09" title={t(nitzanVat.title, lang)}>
        <DataTable cols={nitzanVat.cols[lang]} rows={nitzanVat.rows} />
        <div className="mt-5">
          <Callout tone="warn">{t(nitzanVat.cap, lang)}</Callout>
        </div>
      </Section>

      <Section id="seo" kicker="10" title={t(nitzanSeo.title, lang)}>
        <p className="mb-5 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nitzanSeo.note, lang)}</p>
        <DataTable
          cols={[lang === "he" ? "עמוד" : "Page", lang === "he" ? "כותרת מוצעת" : lang === "fr" ? "Titre proposé" : "Proposed title"]}
          rows={nitzanSeo.rows.map((r) => [r.page, r.title])}
        />
        <p className="mt-5 max-w-3xl text-[14px] leading-relaxed">{t(nitzanSeo.desc, lang)}</p>
      </Section>

      <Section id="terms" kicker="11" title={lang === "he" ? "תנאים" : lang === "fr" ? "Conditions" : "Terms"}>
        <p className="max-w-3xl text-[15px] leading-relaxed">{t(nitzanTerms, lang)}</p>
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed">{t(nitzanClose, lang)}</p>
        <div className="mt-8">
          <SourceList items={nitzanSources} lang={lang} />
        </div>
      </Section>

      <div id="contact">
        <ContactBar lang={lang} devis={nitzanMeta.devis} tone="navy" />
      </div>
    </main>
  );
}

function MockHome({ lang }: { lang: "he" | "fr" | "en" }) {
  const cta = lang === "fr" ? "Envoyer une photo sur WhatsApp" : lang === "en" ? "Send a photo on WhatsApp" : "שלחו תמונה בוואטסאפ";
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-paper shadow-[0_16px_40px_-28px_rgba(8,43,91,0.45)]">
      <div className="relative h-56 md:h-72">
        <img src="/media/nitzan-terrace.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative flex h-full flex-col justify-end p-5 md:p-8">
          <p className="text-[12px] tracking-wide text-paper/75">אשדוד והסביבה · גגות · מרפסות · אחזקה</p>
          <p className="font-display mt-1 text-2xl font-semibold text-paper md:text-3xl">גינה מטופחת. שירות אישי. קרוב לבית.</p>
          <span className="mt-4 inline-flex h-11 w-fit items-center gap-2 rounded-md bg-paper px-4 text-sm font-medium text-navy">
            <MessageCircle className="size-4" />
            {cta}
          </span>
        </div>
      </div>
      <div className="grid gap-px border-t border-line bg-line md:grid-cols-[1.2fr_1fr]">
        <div className="bg-paper p-5">
          <p className="text-[13px] font-medium">
            {lang === "he" ? "טופס משני — אחרי שמירה מרכזית" : lang === "fr" ? "Formulaire secondaire — après sauvegarde centrale" : "Secondary form — after central save"}
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <span className="rounded-md border border-line bg-bg px-3 py-2 text-[12px] text-muted">
              {lang === "he" ? "שם" : lang === "fr" ? "Nom" : "Name"}
            </span>
            <span className="rounded-md border border-line bg-bg px-3 py-2 text-[12px] text-muted">
              {lang === "he" ? "יישוב" : lang === "fr" ? "Ville" : "Town"}
            </span>
            <span className="rounded-md border border-line bg-bg px-3 py-2 text-[12px] text-muted">
              {lang === "he" ? "הצורך" : lang === "fr" ? "Besoin" : "Need"}
            </span>
          </div>
        </div>
        <div className="bg-sand p-5 text-[13px] leading-relaxed text-muted">
          {lang === "he"
            ? "האזור גלוי. תמונת תיק אמיתית. וואטסאפ ראשי, טופס משני. האישור מוצג רק אחרי שמירה עם מזהה — לא אחרי לחיצה בלבד."
            : lang === "fr"
              ? "Zone visible, photo de chantier réelle, WhatsApp en premier, formulaire ensuite. Confirmation seulement après sauvegarde avec identifiant."
              : "Service area visible, real portfolio photo, WhatsApp first, form second. Confirm only after a save with an ID — not after a click."}
        </div>
      </div>
    </div>
  );
}
