import { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "positive"
  | "danger";

export type IconPosition = "left" | "right";

export type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  variant?: ButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
