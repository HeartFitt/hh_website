import { Dumbbell, Flame, Heart, Gamepad2, Users, type LucideIcon} from 'lucide-react';
import React, { type ReactElement } from 'react';
import Snack from '~/components/Snack';

const snacks: { type: string, color: string, title: string, icon: React.ElementType; description: string }[] = [
    { title: "Boost Member Engagement & Retention", type: "clubs", color: "green", icon: Users, description: 'Through HeartHero Club games & weekly leaderboards, that keep members coming back.'},
    { title: "Empower Personal Trainers", type: "clubs", color: "red", icon: Dumbbell, description: 'HeartHero SOLO enhances trainder-client accountability and makes programming more actionable and measureable.' },
    { title: "Turn Cardio Into a Game", type: "members", color: "blue", icon: Gamepad2, description: 'Track your progress, earn streaks & level up - one heart beat at a time.' },
    { title: "Burn Fat", type: "members", color: "orange", icon: Flame, description: 'Train your body to burn fat as fuel. Take part in hearth-healthy exercise that is optimized for fat burn, instead of unhelpful intensity.' },
    { title: "Take Control of Your Heart Health", type: "members", color: "yellow", icon: Heart, description: 'Tackle the #1 cause of death, heart disease, head-on using science-based cardio.' },
]

function getSnackList(filter: string, title: string) {
    return (
        <div className='flex flex-col gap-4 w-full lg:w-[30rem]'>
            <h4>{title}</h4>
            {/* Business Snacks */}
            {snacks
                .filter((snack) => snack.type === filter)
                .map((snack, index) => (
                    <React.Fragment key={index}>
                        <Snack icon={snack.icon} color={snack.color}>
                            {snack.title}
                        </Snack>
                        <p className='text-neutral-400'>{snack.description}</p>
                    </React.Fragment>
                ))}
        </div> 
    );
}

const Effect: React.FC = () => {
    return (
        <section>
        <div className="flex flex-col px-16 items-center justify-center py-16 gap-16">
            <h2 className='text-center'>The HeartHero Effect</h2>
            {/* Snacks and Desc */}
            {/* Personal */}
            <div className='flex flex-wrap gap-8'>
                {getSnackList("clubs", "Clubs")}
                {getSnackList("members", "Members")}
            </div>
        </div>
      </section>
    );
};

export default Effect;