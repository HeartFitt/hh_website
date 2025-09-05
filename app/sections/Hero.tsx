import React from "react";
import { PersonStanding, Check, Building } from "lucide-react";
import ProductCard from "~/components/ProductCard";
import Button from "~/hkit/Button";
import type { LucideIcon } from "lucide-react";

type ProductCardContent = {
  title: string;
  actionButton: React.ReactNode;
  icon?: React.ElementType;
  iconColor?: string;
  desc?: string;
  features?: string[];
}

const cardContent: ProductCardContent[] = [
    {
        title: "Personal",
        actionButton: <Button onClick={() => window.location.href = "/personal"} label="Get Started" size="lg" variant="primary" fillWidth={true} />,
  icon: PersonStanding,
        iconColor: "var(--orange-500)",
        desc: "Make exercise fun & rise on the leaderboard.",
        features: [
            "App calibrated to personal hardware",
            "Let’s you exercise at your pace"
        ]
    },
    {
        title: "Business",
        actionButton: <Button onClick={() => window.location.href = "/business"} label="Join Now" size="lg" variant="secondary" fillWidth={true} />,
  icon: Building,
        iconColor: "var(--green-500)",
        desc: "Turn cardio into income.",
        features: [
            "Club leaderboards",
            "Heart rate detection hardware",
            "Custom theme tailored to your club"
        ]
    }
]

export function Hero() {
  return (
    <main className="flex items-center justify-center pt-16">
      {/* Hero */}
      <section>
        {/* Gradient */}
        <img src="./hh_gradient.png" alt="background gradient" className="absolute z-[-1] blur-[125px] left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%]" />
        {/* <img src="./hh_bike.png" alt="background gradient" className="absolute z-[-2] left-[50%] translate-x-[-50%] bottom-0 w-[100vw] max-w-[1200px]" style={{boxShadow: "25 25 50px 50px var(--neutral-900) inset"}} /> */}
        {/* Wrapper */}
        <div className='flex flex-col items-center gap-[6rem]'>
          {/* Title */}
          <div className="w-full align-center text-center pt-16">
            <h1 className='title-1'>
              Gamified,
              <br />
              Heart-healthy <br />
              Exercise.
            </h1>
          </div>
          {/* Cards */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
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
                      <Check size={16} strokeWidth={3} color="var(--neutral-500)" />
                      <span className="font-normal text-md text-neutral-200">{feature}</span>
                    </li>
                  ))}

                </ol>
              </ProductCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}