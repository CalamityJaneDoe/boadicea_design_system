import type { InputHTMLAttributes } from "react";
import type { Variant, Position } from "../../../utils/Common.types.ts";

export type CheckboxProps = {
  label: string;
  variant?: Variant;
  checkboxPosition?: Position;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
