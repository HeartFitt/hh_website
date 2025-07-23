import React, { type ReactElement} from 'react';
import { MoneyWavyIcon, SignatureIcon, ThumbsUpIcon, TrendUpIcon, UsersFourIcon, UserSoundIcon, type Icon } from '@phosphor-icons/react';
import Snack from '~/components/Snack';

const snacks: { icon: ReactElement<Icon>; description: string }[] = [
    { icon: <MoneyWavyIcon />, description: 'Passive Revenue' },
    { icon: <TrendUpIcon />, description: 'Athletic Hot-spot' },
    { icon: <ThumbsUpIcon />, description: 'Member Engagement' },
    { icon: <SignatureIcon />, description: 'Drive New Memberships' },
    { icon: <UserSoundIcon />, description: 'Word of Mouth Growth' },
]

const HubBenefits: React.FC = () => {
    return (
        <section>
           <div className='flex flex-col justify-center items-center gap-8'>
            {/* Snacks and Desc */}
            <div className='text-center'>
                <h2>Hub Benefits</h2>
                <h6 className='text-neutral-500'>Harness the revenue and popularity opportunities
 through HeartHero Hub Locations.</h6>
            </div>
            <div className='flex flex-wrap justify-center gap-4 items-center '>
                {snacks.map((snack, index) => (
                    <Snack key={index} icon={snack.icon}>
                        {snack.description}
                    </Snack>
                ))}
            </div>
           </div>
        </section>
    );
};

export default HubBenefits;