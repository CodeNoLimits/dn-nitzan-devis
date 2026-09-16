import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { hub, nekudaMeta, nitzanMeta, ui } from "@/content/copy";
import { cn } from "@/lib/cn";
import { deploySite } from "@/lib/site-mode";
import { NitzanPage } from "@/routes/nitzan";
import { NekudaPage } from "@/routes/nekuda";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "DreamNova · deux sites" },
      {
        name: "description",
        content: "Deux sites séparés — Nekuda Tova et HaNitzan SheBaGan. Hub agence privé.",
      },
    ],
  }),
});

function Home() {
  if (deploySite === "nitzan") return <NitzanPage />;
  if (deploySite === "nekuda") return <NekudaPage />;

  const { lang, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const t = hub;

  return (
    <main>
      <section className="border-b border-line bg-forest text-paper">
        <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
          <p className="text-[11px] font-medium tracking-[0.2em] text-paper/70 uppercase">{t.kicker[lang]}</p>
          <h1 className="font-display mt-2 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {t.private[lang]}
          </h1>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <SiteDoor
          to="/nekuda"
          img="/media/nekuda-hero.jpg"
          tone="wine"
          kicker={nekudaMeta.devis}
          title={nekudaMeta.client}
          owner={nekudaMeta.owner}
          lead={t.nekudaRole[lang]}
          fee={t.nekudaFee}
          cta={ui.enter[lang]}
          Arrow={Arrow}
        />
        <SiteDoor
          to="/nitzan"
          img="/media/nitzan-hero.jpg"
          tone="navy"
          kicker={nitzanMeta.devis}
          title={nitzanMeta.client}
          owner={nitzanMeta.owner}
          lead={t.nitzanRole[lang]}
          fee={t.nitzanFee}
          cta={ui.enter[lang]}
          Arrow={Arrow}
        />
      </section>
    </main>
  );
}

function SiteDoor({
  to,
  img,
  tone,
  kicker,
  title,
  owner,
  lead,
  fee,
  cta,
  Arrow,
}: {
  to: string;
  img: string;
  tone: "wine" | "navy";
  kicker: string;
  title: string;
  owner: string;
  lead: string;
  fee: string;
  cta: string;
  Arrow: typeof ArrowLeft;
}) {
  return (
    <Link
      to={to}
      className="site-door group relative flex min-h-[28rem] flex-col justify-end overflow-hidden text-paper md:min-h-[calc(100dvh-11rem)]"
    >
      <img src={img} alt="" className="absolute inset-0 size-full object-cover" />
      <div className={cn("absolute inset-0", tone === "wine" ? "bg-wine/70" : "bg-navy/70")} />
      <div className="relative flex flex-1 flex-col justify-end p-8 md:p-10">
        <p className="text-[11px] tracking-[0.16em] text-paper/70 uppercase">{kicker}</p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        <p className="mt-1 text-sm text-paper/75">{owner}</p>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-paper/90">{lead}</p>
        <p className="mt-6 font-display text-xl font-semibold tabular-nums">{fee}</p>
        <span className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-md bg-paper px-4 text-sm font-medium text-ink">
          {cta}
          <Arrow className="size-4" />
        </span>
      </div>
    </Link>
  );
}
