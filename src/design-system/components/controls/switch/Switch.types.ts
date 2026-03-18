import type { InputHTMLAttributes } from "react";

export type SwitchPosition = "left" | "right";

export type SwitchProps = {
  label: string;
  switchPosition: SwitchPosition;
  description?: string;
  showState?: boolean;
  onLabel?: string;
  offLabel?: string;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
