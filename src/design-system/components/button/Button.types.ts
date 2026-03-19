import { ReactNode, ButtonHTMLAttributes } from "react";
import { VariantExtended, Position } from "../../utils/Common.types.ts";

export type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: Position;
  variant?: VariantExtended;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
