import { cn } from "../../../utils/classNames";
import styles from "./Radio.module.css";
import type { RadioProps } from "./Radio.types.ts";

export function Radio({
  label,
  variant = "accent",
  radioPosition = "left",
  className,
  ...props
}: RadioProps) {
  return (
    <label
      data-variant={variant}
      className={cn(styles.radioWrapper, className)}
    >
      {radioPosition === "left" && <input type="radio" {...props} />}

      <span className={styles.labelText}>{label}</span>

      {radioPosition === "right" && <input type="radio" {...props} />}
    </label>
  );
}
