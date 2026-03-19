import { cn } from "../../../utils/classNames";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import styles from "./Stepper.module.css";
import type { StepperProps } from "./Stepper.types";
import { Button } from "../../button";


export function Stepper({
  label,
  variant = "accent",
  limit,
  disabled = false,
  className,
}: StepperProps) {
  const [quantity, setQuantity] = useState(0);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const action = event.currentTarget.dataset.action;

    if (action === "increase" && (limit === undefined || quantity < limit)) {
      setQuantity((q) => q + 1);
    }

    if (action === "decrease" && quantity > 0) {
      setQuantity((q) => q - 1);
    }
  }

  const isMin = quantity === 0 || disabled;
  const isMax = (limit !== undefined && quantity === limit) || disabled;

  return (
    <div
      data-variant={variant}
      data-disabled={disabled ? "true" : undefined}
      className={cn(styles.stepper, className)}
    >
      {/* Label */}
      <span className={styles.label}>{label}</span>

      {/* Controls */}
      <div className={styles.stepperControls}>
        <Button
          data-variant={variant}
          aria-label="Decrease quantity"
          icon={<Minus />}
          data-action="decrease"
          onClick={handleClick}
          disabled={isMin}
        />

        <span
          className={styles.stepperValue}
          aria-live="polite"
          aria-atomic="true"
        >
          {quantity}
        </span>

        <Button
          data-variant={variant}
          aria-label="Increase quantity"
          icon={<Plus />}
          data-action="increase"
          onClick={handleClick}
          disabled={isMax}
        />
      </div>

      {/* Limit */}
      {limit !== undefined && (
        <span className={styles.stepperLimit}>
          {quantity} / {limit}
        </span>
      )}
    </div>
  );
}
