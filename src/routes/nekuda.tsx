import { createFileRoute, redirect } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { nekudaMeta, ui } from "@/content/copy";
import {
  nekudaAudit,
  nekudaChannels,
  nekudaClose,
  nekudaCreatives,
  nekudaExample,
  nekudaHero,
  nekudaLead,
  nekudaMarket,
  nekudaMeasure,
  nekudaOrganic,
  nekudaPlans,
  nekudaPolicy,
  nekudaRule,
  nekudaScenarios,
  nekudaSeo,
  nekudaSources,
  nekudaTerms,
  nekudaTests,
  nekudaVat,
  nekudaYear,
} from "@/content/nekuda";
import { Callout, ContactBar, DataTable, PhotoStrip, PlanCard, ReviewBanner, Section, SourceList, t } from "@/components/proposal";
import { ScenarioBlock } from "@/components/roi";
import { deploySite } from "@/lib/site-mode";

export const Route = createFileRoute("/nekuda")({
  beforeLoad: () => {
    if (deploySite === "nitzan") throw redirect({ to: "/" });
  },
  component: NekudaPage,
  head: () => ({
    meta: [
      { title: "נקודה טובה — מחקר והצעה" },
      {
        name: "description",
        content: "90-day pilot for Nekouda Tova. 1,000 ILS + 15% of positive eligible result. Proposal for review — outcomes are not guaranteed.",
      },
    ],
  }),
});

export function NekudaPage() {
  const { lang } = useLang();
  return (
    <main id="top">
      <ReviewBanner lang={lang} extra={t(nekudaMeta.forWhom, lang)} />
      <header className="relative min-h-[22rem] overflow-hidden text-paper md:min-h-[28rem]">
        <img src="/media/nekuda-hero.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-wine/80" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="inline-flex rounded-sm bg-paper/15 px-2 py-0.5 text-[11px] font-medium">{nekudaMeta.devis}</p>
          <p className="mt-4 text-[13px] tracking-wide text-paper/70">
            {nekudaMeta.owner} · {t(nekudaMeta.store, lang)} · {t(nekudaMeta.hours, lang)}
          </p>
          <h1 className="font-display mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            {nekudaMeta.client}
          </h1>
          <p className="font-display mt-4 max-w-2xl text-lg text-paper/90">{t(nekudaHero, lang)}</p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-paper/75">{t(nekudaLead, lang)}</p>
          <p className="mt-5 text-[11px] tracking-wide text-paper/55">
            {lang === "he"
              ? "צילום מוצר מהחנות — סט ליקוטי מוהר״ן, ליקוטי תפילות ועלים לתרופה"
              : lang === "fr"
                ? "Photo produit de la boutique — coffret Likutei Moharan, Tefilot et Alim liTerufah"
                : "Product photo from the store — Likutei Moharan, Tefilot and Alim liTerufah set"}
          </p>
        </div>
      </header>

      <Section id="audit" kicker="01" title={t(nekudaAudit.title, lang)}>
        <Callout>{t(nekudaAudit.scope, lang)}</Callout>
        <div className="mt-6">
          <DataTable
            cols={[t(ui.observed, lang), t(ui.action, lang)]}
            rows={nekudaAudit.findings.map((f) => [t(f.find, lang), t(f.act, lang)])}
          />
        </div>
      </Section>

      <Section id="market" kicker="02" title={t(nekudaMarket.title, lang)}>
        <div className="mb-8">
          <PhotoStrip
            caption={
              lang === "he"
                ? "מוצרים מהחנות nekodatova.co.il — סט 180 ₪ וסידור האש שלי 148 ₪"
                : lang === "fr"
                  ? "Photos boutique nekodatova.co.il — coffret 180 ₪ et siddour HaEsh Sheli 148 ₪"
                  : "Store photos from nekodatova.co.il — 180 ILS set and HaEsh Sheli siddur 148 ILS"
            }
            photos={[
              { src: "/media/nekuda/set.jpg", alt: "סט ליקוטי מוהרן ליקוטי תפילות ועלים לתרופה" },
              { src: "/media/nekuda/set-b.jpg", alt: "סט שלושה ספרים — נקודה טובה" },
              { src: "/media/nekuda/siddur.jpg", alt: "סידור האש שלי חום" },
              { src: "/media/nekuda/siddur-b.jpg", alt: "סידור האש שלי — הטבעה" },
              { src: "/media/nekuda/siddur-c.jpg", alt: "סידור האש שלי אפור" },
              { src: "/media/nekuda/likutey.jpg", alt: "ליקוטי מוהר״ן בכריכה מהודרת" },
            ]}
          />
        </div>
        <p className="mb-6 max-w-3xl text-[15px] leading-relaxed">{t(nekudaMarket.intro, lang)}</p>
        <DataTable
          cols={[lang === "he" ? "ייחוס ציבורי" : lang === "fr" ? "Référence publique" : "Public reference", lang === "he" ? "משמעות" : lang === "fr" ? "Lecture" : "What it means"]}
          rows={nekudaMarket.rows.map((r) => [t(r.k, lang), t(r.v, lang)])}
        />
        <p className="mt-5 max-w-3xl text-[14px] leading-relaxed">{t(nekudaMarket.rank, lang)}</p>
      </Section>

      <Section id="seo" kicker="03" title={t(nekudaSeo.title, lang)}>
        <p className="mb-5 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nekudaSeo.note, lang)}</p>
        <DataTable
          cols={[
            lang === "he" ? "עמוד" : "Page",
            lang === "he" ? "כותרת מוצעת" : lang === "fr" ? "Titre proposé" : "Proposed title",
            lang === "he" ? "תיאור מוצע" : lang === "fr" ? "Description" : "Proposed description",
          ]}
          rows={[
            ["/", nekudaSeo.homeTitle, nekudaSeo.homeDesc],
            [lang === "he" ? "סט" : lang === "fr" ? "Coffret" : "Set", nekudaSeo.setTitle, nekudaSeo.setDesc],
          ]}
        />
      </Section>

      <Section id="channels" kicker="04" title={lang === "he" ? "ערוצים" : lang === "fr" ? "Canaux" : "Channels"}>
        <div className="space-y-4">
          {nekudaChannels.map((c) => (
            <div key={c.k.en} className="rounded-xl border border-line bg-paper p-5">
              <p className="font-display text-lg font-semibold">{t(c.k, lang)}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{t(c.v, lang)}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Callout tone="warn">{t(nekudaPolicy, lang)}</Callout>
        </div>
      </Section>

      <Section id="tests" kicker="05" title={t(nekudaTests.title, lang)}>
        <DataTable
          cols={[lang === "he" ? "שדה" : lang === "fr" ? "Champ" : "Field", lang === "he" ? "כלל" : lang === "fr" ? "Règle" : "Rule"]}
          rows={nekudaTests.rows.map((r) => [t(r.k, lang), t(r.v, lang)])}
        />
        <p className="mt-5 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nekudaTests.note, lang)}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {nekudaCreatives.map((c) => (
            <blockquote key={c.t.en} className="rounded-xl border border-line bg-paper p-5">
              <p className="text-xs font-medium tracking-wide text-wine">{t(c.t, lang)}</p>
              <p className="mt-3 text-[14px] leading-relaxed">{t(c.body, lang)}</p>
            </blockquote>
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nekudaOrganic, lang)}</p>
      </Section>

      <Section id="measure" kicker="06" title={t(nekudaMeasure.title, lang)}>
        <p className="mb-5 max-w-3xl text-[15px] leading-relaxed">{t(nekudaMeasure.intro, lang)}</p>
        <DataTable
          cols={[lang === "he" ? "שלב" : lang === "fr" ? "Étape" : "Stage", lang === "he" ? "מה נספר" : lang === "fr" ? "Ce qu’on compte" : "What is counted"]}
          rows={nekudaMeasure.stages.map((s) => [t(s.k, lang), t(s.v, lang)])}
        />
        <div className="mt-5">
          <Callout tone="warn">{t(nekudaMeasure.eligible, lang)}</Callout>
        </div>
      </Section>

      <Section id="offers" kicker="07" title={lang === "he" ? "הצעת הפיילוט" : lang === "fr" ? "Offre du pilote" : "Pilot offer"}>
        <p className="mb-6 max-w-3xl text-[15px] leading-relaxed">{t(nekudaRule, lang)}</p>
        <div className="grid gap-5 lg:grid-cols-2">
          {nekudaPlans.map((p) => (
            <PlanCard
              key={p.id}
              lang={lang}
              name={t(p.name, lang)}
              tag={t(p.tag, lang)}
              fee={p.fee}
              media={p.media}
              extra={t(p.extra, lang)}
              includes={p.includes.map((x) => t(x, lang))}
              recommended={"recommended" in p && Boolean(p.recommended)}
              tone={p.tone}
            />
          ))}
        </div>
        <p className="mt-6 text-[13px] text-muted">{t(ui.vat, lang)}</p>
        <p className="mt-4 max-w-3xl text-[14px] leading-relaxed">{t(nekudaExample, lang)}</p>
        <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-muted">{t(nekudaVat, lang)}</p>
      </Section>

      <Section id="year" kicker="08" title={t(nekudaScenarios.title, lang)}>
        <ScenarioBlock
          lang={lang}
          intro={t(nekudaScenarios.intro, lang)}
          cols={nekudaScenarios.cols[lang]}
          rows={nekudaScenarios.rows[lang]}
          note={t(nekudaScenarios.be, lang)}
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {nekudaYear.map((y, i) => (
            <li key={y.t.en} className="rounded-xl border border-line bg-paper p-5">
              <p className="text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
              <p className="font-display mt-1 text-lg font-semibold">{t(y.t, lang)}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{t(y.d, lang)}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="terms" kicker="09" title={lang === "he" ? "תנאים" : lang === "fr" ? "Conditions" : "Terms"}>
        <p className="max-w-3xl text-[15px] leading-relaxed">{t(nekudaTerms, lang)}</p>
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed">{t(nekudaClose, lang)}</p>
        <div className="mt-8">
          <SourceList items={nekudaSources} lang={lang} />
        </div>
      </Section>

      <div id="contact">
        <ContactBar lang={lang} devis={nekudaMeta.devis} tone="wine" />
      </div>
    </main>
  );
}
