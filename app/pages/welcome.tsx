import Button from "~/hkit/Button";
import { SneakerMoveIcon, CheckIcon, BuildingsIcon, type IconProps } from "@phosphor-icons/react";
import ProductCard from "~/components/ProductCard";

type ProductCardContent = {
  title: string;
  actionButton: React.ReactNode;
  icon?: React.ElementType<IconProps>;
  iconColor?: string;
  desc?: string;
  features?: string[];
}

const cardContent: ProductCardContent[] = [
  {
    title: "Personal",
    actionButton: <Button label="Get Started" size="lg" variant="primary" fillWidth={true} />,
    icon: SneakerMoveIcon,
    iconColor: "var(--orange-500)",
    desc: "Make exercise fun & rise on the leaderboard.",
    features: [
      "App calibrated to personal hardware",
      "Let’s you exercise at your pace"
    ]
  },
  {
    title: "Business",
    actionButton: <Button label="Join Now" size="lg" variant="secondary" fillWidth={true} />,
    icon: BuildingsIcon,
    iconColor: "var(--green-500)",
    desc: "Turn cardio into income.",
    features: [
      "Club leaderboards",
      "Heart rate detection hardware",
      "Custom theme tailored to your club"
    ]
  }
]

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      {cardContent.map((card, index) => (
        <ProductCard 
        key={index}
          title={card.title}
          actionButton={card.actionButton}
          icon={card.icon}
          iconColor={card.iconColor}
          >
            <div></div>
            <p className="text-md text-neutral-200">{card.desc}</p>
            <ol >
              {card.features?.map((feature, index) => (
                <li className="flex flex-row gap-2 items-center" key={index}>
                  <CheckIcon size={16} weight="bold" color="var(--neutral-500)" />
                  <span className="font-normal text-md text-neutral-200">{feature}</span>
                </li>
              ))}
              
            </ol>
        </ProductCard>
      ))}
        
    </main>
  );
}