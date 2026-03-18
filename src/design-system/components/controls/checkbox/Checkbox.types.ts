import type { InputHTMLAttributes } from "react";

export type CheckboxPosition = "left" | "right";

export type CheckboxProps = {
  label: string;
  checkboxPosition?: CheckboxPosition;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
