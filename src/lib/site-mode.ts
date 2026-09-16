export type DeploySite = "hub" | "nitzan" | "nekuda";

const raw = (import.meta.env.VITE_SITE as string | undefined)?.trim();

export const deploySite: DeploySite =
  raw === "nitzan" || raw === "nekuda" ? raw : "hub";
