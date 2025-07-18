import React from "react";
import type { IconProps } from "@phosphor-icons/react";

interface ProductCardProps {
    title: string;
    actionButton: React.ReactNode;
    icon?: React.ElementType<IconProps>;
    iconColor?: string;
    children?: React.ReactNode;
}

const ProductCard = ({ title, actionButton, icon: Icon, iconColor = "var(--neutral-400)", children }: ProductCardProps) => {

    return (
        <div className="bg-neutral-800 p-4 rounded-lg flex flex-col flex-wrap w-full gap-4 justify-between">
            <div className="flex flex-col gap-2">
                <div>
                    {Icon && <Icon size={32} color={iconColor} weight="bold" />}
                    <h3 className="text-[2.125rem]">{title}</h3>
                </div>
                {children}
            </div>
            <br className="mt-8" />
            {actionButton}
        </div>
    );
};

export default ProductCard;