import React, { type ReactElement, type ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";
import { Check } from "lucide-react";
import { useNavigate, type To } from "react-router";

export type ButtonProps = {
  label?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "rounded";
  variant?: "primary" | "secondary" | "tertiary" | "icon";
  fillWidth?: boolean;
  appendBefore?: ReactElement<any>;
  appendAfter?: ReactElement<any>;
  icon?: ReactElement<any>; // Only for icon variant
  link?: To;
} & ComponentPropsWithoutRef<"button">;

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  size = "lg",
  variant = "primary",
  fillWidth = false,
  appendBefore,
  appendAfter,
  icon,
  link,
  disabled,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (onClick) onClick(e);
    if (link) navigate(link);
  };

  const baseClass = `${styles.btn} ${styles[`btn-${size}`]} ${styles[`btn-${variant}`]} ${fillWidth ? styles.btnContainerfullWidth : ""} ${
    disabled ? styles.disabled : ""
  }`;

  return (
    <button
      {...props}
      type="button"
      className={baseClass}
      onClick={handleClick}
      disabled={disabled}
      aria-label={label}
    >
      {variant === "icon" ? (
        icon ?? <Check size={20} />
      ) : (
        <div className="flex justify-center gap-1">
          {appendBefore}
          {children && (
            <span className={`px-1 btn-${variant === "tertiary" ? "tertiary" : ""}`}>
              {children}
            </span>
          )}
          {label}
          {appendAfter}
        </div>
      )}
    </button>
  );
};

export default Button;
