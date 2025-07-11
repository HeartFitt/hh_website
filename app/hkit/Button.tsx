import React, { useState, useRef, useEffect } from "react";
import styles from "./Button.module.css";
import { getSvgPath } from "figma-squircle";
import { href } from "react-router";
import getSquricle from "./utils/getSquircle";

export type ButtonProps = {
    label: string;
    onClick?: () => void;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "tertiary";
    fillWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    size = "lg",
    variant = "primary",
    fillWidth = false
}) => {
    const [dimensions, setDimensions] = useState<string>("");
    const buttonRef = useRef<HTMLDivElement>(null);
    

    useEffect(()=> {
        // Set on init
        setDimensions(getSquricle(buttonRef, 8));
        const handleResize = () => { 
            setDimensions(getSquricle(buttonRef, 8));
        }
        // Set on resize
        window.addEventListener("resize", handleResize)
    }, [])

    return (
        // style={{ clipPath: `path('${dimensions}')` }}
        <div ref={buttonRef} className={`${styles.btnContainer} ${styles.btn} ${styles[`btn-${size}`]} ${styles[`btn-${variant}`]} ${fillWidth ? styles.btnContainerfullWidth : ""}`}>
            <a href="#">
                <button onClick={onClick}>
                    <span>{label}</span>
                </button>
            </a>
        </div>
    );
};

export default Button;