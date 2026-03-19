import { cn } from "../../../utils/classNames";
import styles from "./Checkbox.module.css";
import type { CheckboxProps } from "./Checkbox.types";

export function Checkbox({
  label,
  variant = "accent",
  checkboxPosition = "left",
  className,
  ...props
}: CheckboxProps) {
  return (
    <label
      data-variant={variant}
      className={cn(styles.checkboxWrapper, className)}
    >
      {checkboxPosition === "left" && <input type="checkbox" {...props} />}

      <span className={styles.labelText}>{label}</span>

      {checkboxPosition === "right" && <input type="checkbox" {...props} />}
    </label>
  );
}
