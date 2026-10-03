import type { CSSProperties } from "react";

/** Stagger delay for [data-reveal] elements, in seconds. */
export const delay = (seconds: number): CSSProperties =>
  ({ "--d": `${seconds}s`, "--dd": `${seconds}s` }) as CSSProperties;

export const pad = (n: number): string => String(n).padStart(2, "0");
