import { cn } from "../../../utils/classNames";
import styles from "./ControlsFieldset.module.css";
import type { ControlsFieldsetProps } from "./ControlsFieldset.types";

export function ControlsFieldset({
  children,
  variant = "inline",
  className,
  legend,
  hint,
  error,
}: ControlsFieldsetProps) {
  return (
    <fieldset
      className={cn(styles.fieldset, className, error && styles.errorFieldset)}
    >
      {legend && <legend className={styles.legend}>{legend}</legend>}
      {hint && <p className={styles.hint}>{hint}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div
        className={cn(
          styles.controlsGroup,
          variant === "inline" ? styles.inline : styles.stacked,
        )}
      >
        {children}
      </div>
    </fieldset>
  );
}
