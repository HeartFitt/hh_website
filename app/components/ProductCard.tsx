import React, {useState, useEffect} from "react";
import type { ButtonProps } from "../hkit/Button";
import type { IconProps } from "@phosphor-icons/react";
import getSquricle from "../hkit/utils/getSquircle";

interface ProductCardProps {
    title: string;
    actionButton: React.ReactNode;
    icon?: React.ElementType<IconProps>;
    iconColor?: string;
    children?: React.ReactNode;
}

const ProductCard = ({ title, actionButton, icon: Icon, iconColor = "var(--neutral-400)", children }: ProductCardProps) => {
    const [dimensions, setDimensions] = useState<string>("");
    const cardRef = React.useRef<HTMLDivElement>(null);
    useEffect(()=> {
        setDimensions(getSquricle(cardRef, 16))
    }, [])

    return (
        // style={{ clipPath: `path('${dimensions}')` }}
        <div ref={cardRef} className="bg-neutral-800 p-4 rounded-lg flex flex-col w-full gap-4 justify-between h-[500px]">
            <div className="flex flex-col gap-2">
                <div>
                    {Icon && <Icon size={32} color={iconColor} weight="bold" />}
                    <h3 className="text-[2.125rem]">{title}</h3>
                </div>
                {children}
            </div>
            {actionButton}
        </div>
    );
};

export default ProductCard;