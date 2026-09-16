import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function Badge({
  className,
  tone = "ink",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: "ink" | "forest" | "navy" | "wine" | "warn" | "good" | "bad" }) {
  const tones: Record<string, string> = {
    ink: "bg-sand text-ink",
    forest: "bg-forest/10 text-forest",
    navy: "bg-navy/10 text-navy",
    wine: "bg-wine/10 text-wine",
    warn: "bg-[#f3e6d0] text-warn",
    good: "bg-[#e3eee4] text-good",
    bad: "bg-[#f3e0de] text-bad",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 text-[11px] font-medium tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
