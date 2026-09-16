import { useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf, MessageCircle, Printer } from "lucide-react";
import { LANGS } from "@/lib/i18n";
import { useLang } from "@/lib/lang";
import { agency, hub, nekudaMeta, nitzanMeta, sections, ui, type T3 } from "@/content/copy";
import { deploySite } from "@/lib/site-mode";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Site = "hub" | "nekuda" | "nitzan" | "internal";

function siteFromPath(pathname: string): Site {
  if (deploySite === "nitzan") return "nitzan";
  if (deploySite === "nekuda") return "nekuda";
  if (pathname.startsWith("/nekuda")) return "nekuda";
  if (pathname.startsWith("/nitzan")) return "nitzan";
  if (pathname.startsWith("/internal")) return "internal";
  return "hub";
}

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const site = siteFromPath(pathname);
  const { lang } = useLang();
  const t = (m: T3) => m[lang];

  useEffect(() => {
    document.documentElement.dataset.site = site;
    return () => {
      delete document.documentElement.dataset.site;
    };
  }, [site]);

  return (
    <div className="min-h-dvh bg-bg text-ink">
      {site === "nekuda" ? <ClientTop kind="nekuda" /> : null}
      {site === "nitzan" ? <ClientTop kind="nitzan" /> : null}
      {site === "hub" || site === "internal" ? <HubTop /> : null}
      {children}
      <footer className="no-print border-t border-line py-8 text-center text-xs text-muted">
        {site === "nekuda" ? (
          <p>
            {nekudaMeta.client} · {t(nekudaMeta.store)} · {nekudaMeta.phone}
            <span className="mt-1 block text-subtle">
              {ui.agency}
              {" · "}
              {nekudaMeta.devis}
            </span>
          </p>
        ) : null}
        {site === "nitzan" ? (
          <p>
            {nitzanMeta.client} · {t(nitzanMeta.city)} · {nitzanMeta.phone}
            <span className="mt-1 block text-subtle">
              {ui.agency}
              {" · "}
              {nitzanMeta.devis}
            </span>
          </p>
        ) : null}
        {site === "hub" || site === "internal" ? (
          <p>
            {ui.agency} · Jerusalem · {t(ui.vat)}
          </p>
        ) : null}
      </footer>
      {site === "nekuda" || site === "nitzan" ? (
        <WhatsAppFab href={agency.wa} tone={site === "nekuda" ? "wine" : "navy"} label={t(ui.whatsapp)} />
      ) : null}
    </div>
  );
}

function HubTop() {
  const { lang } = useLang();
  const t = (m: T3) => m[lang];
  return (
    <header className="no-print sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-md bg-forest text-[11px] font-semibold tracking-wide text-paper">
            DN
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-tight">{ui.agency}</span>
            <span className="block text-[11px] text-muted">{t(hub.kicker)}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/">{t(ui.home)}</NavLink>
          <NavLink to="/internal">{t(ui.brief)}</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
        </div>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-line px-3 py-2 md:hidden">
        <NavLink to="/">{t(ui.home)}</NavLink>
        <NavLink to="/internal">{t(ui.brief)}</NavLink>
      </nav>
    </header>
  );
}

function ClientTop({ kind }: { kind: "nekuda" | "nitzan" }) {
  const { lang } = useLang();
  const t = (m: T3) => m[lang];
  const wine = kind === "nekuda";
  const links = wine
    ? [
        { href: "#audit", label: t(sections.audit) },
        { href: "#market", label: t(sections.market) },
        { href: "#channels", label: t(sections.channels) },
        { href: "#offers", label: t(sections.offers) },
        { href: "#terms", label: t(sections.terms) },
        { href: "#contact", label: t(sections.contact) },
      ]
    : [
        { href: "#audit", label: t(sections.audit) },
        { href: "#market", label: t(sections.market) },
        { href: "#ads", label: t(sections.ads) },
        { href: "#offers", label: t(sections.offers) },
        { href: "#terms", label: t(sections.terms) },
        { href: "#contact", label: t(sections.contact) },
      ];

  return (
    <header
      className={cn(
        "no-print sticky top-0 z-40 border-b backdrop-blur-sm",
        wine ? "border-wine/20 bg-wine text-paper" : "border-navy/20 bg-navy text-paper",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#top" className="flex min-h-11 items-center gap-2">
          <span
            className={cn(
              "grid size-8 place-items-center rounded-md text-sm font-semibold",
              wine ? "bg-paper text-wine" : "bg-paper text-navy",
            )}
          >
            {wine ? "נ" : <Leaf className="size-4" />}
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-tight">
              {wine ? nekudaMeta.client : nitzanMeta.client}
            </span>
            <span className="block text-[11px] text-paper/70">
              {wine ? nekudaMeta.owner : nitzanMeta.owner}
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex h-9 shrink-0 items-center rounded-sm px-3 text-[13px] text-paper/80 hover:bg-paper/10 hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch inverse />
          <Button
            variant="outline"
            size="sm"
            className="hidden size-9 border-paper/25 bg-paper/10 p-0 text-paper hover:bg-paper/20 sm:inline-flex"
            onClick={() => window.print()}
            aria-label={t(ui.print)}
          >
            <Printer className="size-3.5" />
          </Button>
        </div>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-paper/15 px-3 py-2 lg:hidden">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-sm px-3 text-[13px] text-paper/80 hover:bg-paper/10 hover:text-paper"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function LangSwitch({ inverse = false }: { inverse?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div className={cn("flex rounded-md p-0.5", inverse ? "border border-paper/20 bg-paper/10" : "border border-line bg-paper")}>
      {LANGS.map((l) => (
        <button
          key={l.id}
          type="button"
          onClick={() => setLang(l.id)}
          className={cn(
            "h-8 min-w-10 rounded-sm px-2 text-xs font-medium",
            lang === l.id
              ? inverse
                ? "bg-paper text-ink"
                : "bg-forest text-paper"
              : inverse
                ? "text-paper/70 hover:text-paper"
                : "text-muted hover:text-ink",
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "shrink-0 whitespace-nowrap text-[13px] text-muted hover:text-ink",
      )}
      activeProps={{ className: "text-ink bg-sand" }}
    >
      {children}
    </Link>
  );
}

function WhatsAppFab({ href, tone, label }: { href: string; tone: "wine" | "navy"; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "no-print fixed z-50 inline-flex h-12 items-center gap-2 rounded-full px-4 text-sm font-medium text-paper shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] end-4",
        tone === "wine" ? "bg-wine" : "bg-navy",
      )}
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <MessageCircle className="size-4" />
      {label}
    </a>
  );
}
