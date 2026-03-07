import { cn } from "../../utils/classNames";
import styles from "./Checkbox.module.css";
import type { CheckboxProps } from "./Checkbox.types";

export function Checkbox({
  labels,
  checkboxPosition = "left",
  variant = "inline",
  className,
  legend,
  hint,
  error,
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <fieldset
      className={cn(styles.fieldset, className, error && styles.errorFieldset)}
    >
      {legend && <legend className={styles.legend}>{legend}</legend>}
      {hint && <p className={styles.hint}>{hint}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div
        className={cn(
          styles.checkboxGroup,
          variant === "inline" ? styles.inline : styles.stacked,
        )}
      >
        {labels.map((label, index) => (
          <label key={index} className={styles.checkboxWrapper}>
            {checkboxPosition === "left" && (
              <input type="checkbox" disabled={disabled} {...props} />
            )}
            <span className={styles.labelText}>{label}</span>
            {checkboxPosition === "right" && (
              <input type="checkbox" disabled={disabled} {...props} />
            )}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
