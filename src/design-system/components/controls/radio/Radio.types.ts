import type { InputHTMLAttributes } from "react";
import { Variant, Position } from "../../../utils/Common.types.ts";

export type RadioProps = {
  label: string;
  variant?: Variant;
  radioPosition?: Position;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
