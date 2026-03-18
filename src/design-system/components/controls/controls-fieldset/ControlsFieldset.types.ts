import { ReactNode } from "react";

export type ControlsVariant = "inline" | "stacked";

export type ControlsFieldsetProps = {
  children: ReactNode;
  variant?: ControlsVariant;
  className?: string;
  legend?: string;
  hint?: string;
  error?: string;
};
