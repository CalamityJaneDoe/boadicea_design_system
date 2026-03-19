import type { InputHTMLAttributes } from "react";
import { Variant, Position } from "../../../utils/Common.types.ts";

export type SwitchProps = {
  label: string;
  variant?: Variant;
  switchPosition?: Position;
  description?: string;
  showState?: boolean;
  onLabel?: string;
  offLabel?: string;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
