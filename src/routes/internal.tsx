import { useState } from "react";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { understandingFr, salesNotes } from "@/content/internal";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";
import { deploySite } from "@/lib/site-mode";

export const Route = createFileRoute("/internal")({
  beforeLoad: () => {
    if (deploySite !== "hub") throw redirect({ to: "/" });
  },
  component: InternalPage,
  head: () => ({
    meta: [{ title: "Brief interne · DreamNova" }],
  }),
});

const pitches = [
  {
    t: "WhatsApp — Tselahya d’abord (FR)",
    text: `Tselahya, le dossier Nitzan est prêt pour TOI — pas encore pour Israel Dov.

Site jardinier (à relire, ne pas transférer) :
le chemin /nitzan du site DreamNova.

Ce qui a changé vs l’ancienne grille :
• Basis 2 000 + média 1 000 = 3 000 HT
• Croissance 2 800 + 1 500 = 4 300
• Accélération 3 500 + 3 000 = 6 500
Reco : Basis 90 jours, un canal payant à la fois.
Si plafond 3 000 TTC tout compris : il reste ~640 de média après TVA. Ce n’est plus l’offre standard.

P0 : le formulaire écrit dans le navigateur puis ouvre WhatsApp. Ce n’est pas une demande reçue.
P0 : pas de GA4/GTM/Pixel dans le HTML public.
Site Lovable : on le garde. Page conversion 1 900 HT, pas une refonte 4 900.

Jérusalem = projets ou journée groupée, plancher interne ~2 000 HT.
Aucun lead promis. Valable 30.09.2026.
Contact commercial : David 0584921492.
`,
  },
  {
    t: "WhatsApp — Nekuda Tova, Yaron (HE)",
    text: `שלום לירון, הכנתי מחקר והצעה לעיון לנקודה טובה — בלי התחייבות לתוצאות.

פיילוט 90 יום:
• 1,000 ₪ דמי ניהול לחודש
• 15% מהתוצאה החיובית הזכאית P (אחרי עלויות, מדיה ובסיס) — לא אחוז ממחזור החנות
• מדיה 1,000–1,500 ₪ בכרטיס שלכם
חלופה אם אין התחשבנות רווח: 1,800 ₪ קבוע, אותו היקף.

מתחילים בחיפוש גוגל לפי כוונת רכישה. מטא רק אחרי בדיקת יצירות ומקור נתונים. טיקטוק אורגני; ממומן דתי אינו מובטח.

החנות, החשבונות והלקוחות נשארים שלכם.
בתוקף עד 30.09.2026. קבלת המסמך אינה הרשאה להפעלת קמפיין.
דוד אמור, DreamNova.studio, 0584921492.
`,
  },
];

function InternalPage() {
  const { setLang } = useLang();
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <p className="text-[11px] font-medium tracking-[0.18em] text-muted uppercase">Brief interne · FR</p>
      <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight">Ce que j’ai compris — et comment parler</h1>
      <p className="mt-3 text-[13px] leading-relaxed text-muted">
        Pour toi seulement. Nitzan d’abord à{" "}
        <strong>Tselahya</strong> —{" "}
        <span className="text-wine">ne pas envoyer au jardinier</span>. Le site{" "}
        <Link to="/nitzan" className="underline">
          HaNitzan SheBaGan
        </Link>{" "}
        est le dossier client hébreu / FR. Le site{" "}
        <Link to="/nekuda" className="underline">
          Nekuda Tova
        </Link>{" "}
        va à Yaron seulement quand tu le décides. Jamais cette page, jamais l’accueil. Imprimer = PDF.
      </p>
      <button type="button" className="mt-3 text-[13px] text-forest underline" onClick={() => setLang("fr")}>
        Basculer l’interface en français
      </button>

      <article className="mt-8 rounded-xl border border-line bg-paper p-5 md:p-7">
        <h2 className="font-display text-xl font-semibold">Paragraphe de compréhension</h2>
        <p className="mt-4 text-[15px] leading-[1.75] whitespace-pre-wrap">{understandingFr}</p>
      </article>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold">Notes de vente</h2>
        {salesNotes.map((n) => (
          <div key={n.t} className="rounded-xl border border-line bg-paper p-5">
            <p className="font-display text-lg font-semibold">{n.t}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{n.d}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-display text-xl font-semibold">Messages WhatsApp prêts</h2>
        {pitches.map((p) => (
          <div key={p.t} className="rounded-xl border border-line bg-paper p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-lg font-semibold">{p.t}</p>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  void navigator.clipboard.writeText(p.text);
                  setCopied(p.t);
                }}
              >
                {copied === p.t ? "Copié" : "Copier"}
              </Button>
            </div>
            <pre className="mt-3 text-[13px] leading-relaxed whitespace-pre-wrap text-muted">{p.text}</pre>
          </div>
        ))}
      </section>
    </main>
  );
}
