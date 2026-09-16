import type { Lang } from "@/lib/i18n";
import { ui } from "@/content/copy";
import { DataTable, t } from "@/components/proposal";

export function ScenarioBlock({
  lang,
  intro,
  cols,
  rows,
  note,
}: {
  lang: Lang;
  intro: string;
  cols: string[];
  rows: string[][];
  note: string;
}) {
  return (
    <div className="space-y-4">
      <p className="max-w-3xl text-[14px] leading-relaxed text-muted">{intro}</p>
      <p className="text-[12px] font-medium tracking-wide text-warn">{t(ui.illustration, lang)}</p>
      <DataTable cols={cols} rows={rows} />
      <p className="max-w-3xl text-[14px] leading-relaxed text-muted">{note}</p>
    </div>
  );
}
