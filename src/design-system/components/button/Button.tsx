import { cn } from "../../utils/classNames";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  icon,
  iconPosition = "left",
  variant = "accent",
  className,
  disabled,
  ...props
}: ButtonProps) {
  const isIconOnly = icon && !children;

  return (
    <button
      data-variant={variant}
      className={cn(styles.button, isIconOnly && styles.iconOnly, className)}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}

      {children && <span className={styles.label}>{children}</span>}

      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
}
