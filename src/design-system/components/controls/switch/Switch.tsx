import { useId, useState } from "react";
import { cn } from "../../../utils/classNames";
import styles from "./Switch.module.css";
import type { SwitchProps } from "./Switch.types";

export function Switch({
  label,
  switchPosition = "left",
  description,
  className,
  id,
  checked,
  defaultChecked,
  onChange,
  showState = true,
  onLabel = "On",
  offLabel = "Off",
  ...props
}: SwitchProps) {
  const generatedId = useId();
  const switchId = id ?? generatedId;

  // controlled vs uncontrolled
  const isControlled = checked !== undefined;

  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );

  const isChecked = isControlled ? checked : internalChecked;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlled) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  }

  const stateLabel = isChecked ? onLabel : offLabel;

  return (
    <div className={cn(styles.wrapper, className)}>
      <label htmlFor={switchId} className={styles.container}>
        {/* LABEL LEFT */}
        {switchPosition === "right" && (
          <span className={styles.label}>{label}</span>
        )}

        {/* STATE BEFORE SWITCH */}
        {showState && switchPosition === "left" && (
          <span className={styles.state}>{stateLabel}</span>
        )}

        {/* INPUT */}
        <input
          id={switchId}
          type="checkbox"
          role="switch"
          className={styles.input}
          {...(isControlled ? { checked } : { defaultChecked })}
          onChange={handleChange}
          {...props}
        />

        {/* SWITCH */}
        <span className={styles.track}>
          <span className={styles.thumb} />
        </span>

        {/* STATE AFTER SWITCH */}
        {showState && switchPosition === "right" && (
          <span className={styles.state}>{stateLabel}</span>
        )}

        {/* LABEL RIGHT */}
        {switchPosition === "left" && (
          <span className={styles.label}>{label}</span>
        )}
      </label>

      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
