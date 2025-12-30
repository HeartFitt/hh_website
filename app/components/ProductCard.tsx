import React from "react";
// Lucide icons do not require IconProps type

interface ProductCardProps {
    title: string;
    actionButton: React.ReactNode;
    icon?: React.ElementType;
    iconColor?: string;
    children?: React.ReactNode;
}

const ProductCard = ({ title, actionButton, icon: Icon, iconColor = "var(--neutral-400)", children }: ProductCardProps) => {

    return (
        <div className="bg-neutral-800 p-4 rounded-lg flex flex-col flex-wrap w-full gap-4 justify-between">
            <div className="flex flex-col gap-4">
                <div>
                    {Icon && React.createElement(Icon, { size: 32, color: iconColor })}
                    <h3 className="text-[2.125rem]">{title}</h3>
                </div>
                {children}
            </div>
            <br className="mt-4" />
            {actionButton}
        </div>
    );
};

export default ProductCard;