import type { HTMLAttributes } from "react";
import { Variant } from "../../../utils/Common.types.ts";

export type StepperProps = {
  label: string;
  variant?: Variant;
  limit?: number;
  disabled: boolean;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;
