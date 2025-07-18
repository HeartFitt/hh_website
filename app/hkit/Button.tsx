import React, { useRef, type ReactElement } from "react";
import styles from "./Button.module.css";
import { CheckIcon, type Icon } from "@phosphor-icons/react";

export type ButtonProps = {
    label: string;
    onClick?: () => void;
    size?: "sm" | "md" | "lg" | "rounded";
    variant?: "primary" | "secondary" | "tertiary" | "icon";
    fillWidth?: boolean;
    appendBefore?: ReactElement<Icon>;
    appendAfter?: ReactElement<Icon>;
    // Props only renders for icon variant.
    icon?: ReactElement<Icon>;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    size = "lg",
    variant = "primary",
    fillWidth = false,
    appendBefore,
    appendAfter,
    icon
}) => {
    const buttonRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={buttonRef} className={`${styles.btnContainer} ${styles.btn} ${styles[`btn-${size}`]} ${styles[`btn-${variant}`]} ${fillWidth ? styles.btnContainerfullWidth : ""}`}>
            <a href="#">
                {variant == "icon" ? (
                    //Icon Button
                    <button title={label} onClick={onClick} className="flex flex-row">
                        {icon ? icon : <CheckIcon />}
                        <span className="x-2">{label}</span>
                    </button>
                ) : (
                    // Standard Button
                    <button onClick={onClick} className="flex flex-row pointer-events-none">
                        {!!(appendBefore && appendBefore)}
                        <span className="x-2">{label}</span>
                        {appendAfter && appendAfter}
                    </button> 
            )}
            </a>
        </div>
    );
};

export default Button;