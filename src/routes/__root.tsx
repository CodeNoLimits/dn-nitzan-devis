import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { LangProvider } from "@/lib/lang";
import { Shell } from "@/components/shell";
import appCss from "../styles.css?url";

const APP_NAME = "DreamNova · deux sites";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#1e3d32" },
      {
        name: "description",
        content: "Deux sites séparés — Nekuda Tova (Bnei Brak) et HaNitzan SheBaGan (Ashdod).",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <LangProvider>
            <Shell>
              <Outlet />
            </Shell>
          </LangProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
