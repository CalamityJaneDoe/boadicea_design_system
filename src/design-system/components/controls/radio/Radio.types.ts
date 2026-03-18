import type { InputHTMLAttributes } from "react";

export type RadioPosition = "left" | "right";

export type RadioProps = {
  label: string;
  RadioPosition?: RadioPosition;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
