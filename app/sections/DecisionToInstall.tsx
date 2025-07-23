import React from "react";


export default function DecisionToInstall() {
    
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col text-center gap-2">
                    <h2>From Decision to Install</h2>
                    <h6 className='text-neutral-500'>Start using HeartHero in ~45 days.</h6>
                </div>
                <div className="flex lg:flex-row flex-col justify-between w-full py-8 px-2 lg:px-8 relative gap-8">
                    {timelineSteps.map((step, index) => (
                        <TimelineItem key={index} {...step} />
                    ))}
                </div>
            </div>
        </>
    )
}

type TimelineItemProps = {
  hexIconUrl: string;         // URL of hexagon SVG
  title: string;              // e.g. "45 Days Out"
  items: string[];            // bullet points
};

const TimelineItem: React.FC<TimelineItemProps> = ({hexIconUrl, title, items}) => {
    return (
        <div className="flex lg:flex-col flex-row items-center gap-5">
            <img src={hexIconUrl} alt="Step icon" />
            <div className="flex flex-col gap-2">
                <h6 className="lg:text-center">{title}</h6>
                <ol className="list-disc text-neutral-500 lg:max-w-[30ch]">
                    {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export const timelineSteps = [
  {
    hexIconUrl: "./01.svg",
    title: "45 Days Out",
    items: [
      "Sneak-Peak at your club",
      "Assess Infrastructure for rollout",
      "1-hour training for instructors and personal trainings",
    ],
  },
  {
    hexIconUrl: "./02.svg",
    title: "30 Days Out",
    items: [
      "Sneak-Peak at your club",
      "Assess Infrastructure for rollout",
      "1-hour training for instructors and personal trainings",
    ],
  },
  {
    hexIconUrl: "./03.svg",
    title: "Rollout Week",
    items: [
      "Daily HeartHero 101 intro classes",
      "Club HeartHero leaderboards",
      "Qualifier classes & champions (silver and bronze)",
      "Solo HeartHero Leaderboards for Recovery, Endurance, and Power",
    ],
  },
  {
    hexIconUrl: "./04.svg",
    title: "Training the Club Team",
    items: [
      "Membership for instructors and personal trainers",
      "Players portal",
      "Passive revenue",
    ],
  },
];