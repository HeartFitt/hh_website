import React from "react";
import { getSvgPath } from "figma-squircle";

export default function getSquircle(ref: React.RefObject<HTMLDivElement | null>, radius?: number ): string {

    const getDimensions = () => ({
            width: ref.current?.offsetWidth || 0,
            height: ref.current?.offsetHeight || 0
        });

    return getSvgPath({
        width: getDimensions().width,
        height: getDimensions().height,
        cornerRadius: radius || 8, // defaults to 0
        cornerSmoothing: 0.8, // cornerSmoothing goes from 0 to 1
        preserveSmoothing: true
    });
}

