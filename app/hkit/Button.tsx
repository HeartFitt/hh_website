import React, { useState, useRef, useEffect, type ReactElement } from "react";
import styles from "./Button.module.css";
import { getSvgPath } from "figma-squircle";
import { href } from "react-router";
import type { Icon, IconProps } from "@phosphor-icons/react";

export type ButtonProps = {
    label: string;
    onClick?: () => void;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "tertiary";
    fillWidth?: boolean;
    appendBefore?: ReactElement<Icon>;
    appendAfter?: ReactElement<Icon>;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    size = "lg",
    variant = "primary",
    fillWidth = false,
    appendBefore,
    appendAfter
}) => {
    const [dimensions, setDimensions] = useState<string>("");
    const buttonRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={buttonRef} className={`${styles.btnContainer} ${styles.btn} ${styles[`btn-${size}`]} ${styles[`btn-${variant}`]} ${fillWidth ? styles.btnContainerfullWidth : ""}`}>
            <a href="#">
                <button onClick={onClick} className="flex flex-row">
                    {appendBefore && appendBefore}
                    <span className="x-2">{label}</span>
                    {appendAfter && appendAfter}
                </button>
            </a>
        </div>
    );
};

export default Button;