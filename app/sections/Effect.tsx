import {type Icon, UsersFourIcon } from '@phosphor-icons/react';
import React, { type ReactElement } from 'react';
import Snack from '~/components/Snack';

const snacks: { type: string, color: string, title: string, icon: ReactElement<Icon>; description: string }[] = [
    { title: "Boost Member Engagement & Retention", type: "clubs", color: "green", icon: <UsersFourIcon />, description: 'Through HeartHero Club games & weekly leaderboards, that keep members coming back.'},
    { title: "Title", type: "clubs", color: "green", icon: <UsersFourIcon />, description: 'This is a description for Snack 2' },
    { title: "Title", type: "members", color: "green", icon: <UsersFourIcon />, description: 'This is a description for Snack 3' },
    { title: "Title", type: "members", color: "green", icon: <UsersFourIcon />, description: 'This is a description for Snack 1' },
    { title: "Title", type: "members", color: "green", icon: <UsersFourIcon />, description: 'This is a description for Snack 2' },
]

function getSnackList(filter: string, title: string) {
    return (
        <div className='flex flex-col gap-4'>
            <h4>{title}</h4>
            <br/>
            {/* Business Snacks */}
            {snacks
                .filter((snack) => snack.type === filter)
                .map((snack, index) => (
                    <React.Fragment key={index}>
                        <Snack icon={snack.icon} color={snack.color}>
                            {snack.title}
                        </Snack>
                        <p>{snack.description}</p>
                    </React.Fragment>
                ))}
        </div> 
    );
}

const Effect: React.FC = () => {
    return (
        <section>
        <div className="flex flex-col px-16 items-center justify-center py-16 gap-8">
            <h2>The HeartHero Effect</h2>
            {/* Snacks and Desc */}
            {/* Personal */}
            <div className='flex flex-wrap gap-16'>
                {getSnackList("clubs", "Clubs")}
                {getSnackList("members", "Members")}
            </div>
            <div className='flex flex-wrap gap-8 '>
            </div>
        </div>
      </section>
    );
};

export default Effect;