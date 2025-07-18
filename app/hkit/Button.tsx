import React, { useRef, type ReactElement } from "react";
import styles from "./Button.module.css";
import { CheckIcon, type Icon } from "@phosphor-icons/react";
import { useNavigate, type To } from "react-router";

export type ButtonProps = {
    label?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    size?: "sm" | "md" | "lg" | "rounded";
    variant?: "primary" | "secondary" | "tertiary" | "icon";
    fillWidth?: boolean;
    appendBefore?: ReactElement<Icon>;
    appendAfter?: ReactElement<Icon>;
    // Props only renders for icon variant.
    icon?: ReactElement<Icon>;
    link?: To;
}

const Button: React.FC<ButtonProps> = ({
    label,
    children,
    onClick,
    size = "lg",
    variant = "primary",
    fillWidth = false,
    appendBefore,
    appendAfter,
    icon,
    link
}) => {
    const buttonRef = useRef<HTMLDivElement>(null);
    let navigate = useNavigate();
    const buttonClickEvents = () => {
        if (onClick) onClick();
        if (link) navigate(link);
    }

    return (
        <div aria-label={label} ref={buttonRef} onClick={buttonClickEvents} className={`${styles.btnContainer} ${styles.btn} ${styles[`btn-${size}`]} ${styles[`btn-${variant}`]} ${fillWidth ? styles.btnContainerfullWidth : ""}`}>
            {variant == "icon" ? (
                //Icon Button
                <button type="button" title={label} className="flex flex-row">
                    {icon ? icon : <CheckIcon />}
                </button>
            ) : (
                // Standard Button
                <button type="button" onClick={onClick} className="flex flex-row pointer-events-none">
                    {appendBefore && appendBefore}
                    {children && <span className={`px-1 btn-${variant === 'tertiary' ? "tertiary" : " "}`}>{children}</span>}
                    {label}
                    {appendAfter && appendAfter}
                </button> 
            )}
        </div>
    );
};

export default Button;