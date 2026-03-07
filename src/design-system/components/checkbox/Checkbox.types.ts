import { InputHTMLAttributes } from "react";

export type CheckboxVariant = "inline" | "stacked";

export type CheckboxPosition = "left" | "right";

export type CheckboxProps = {
  labels: string[];
  checkboxPosition?: CheckboxPosition;
  variant?: CheckboxVariant;
  className?: string;
  legend?: string;
  hint?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
