import React, { type ReactElement } from 'react';
import { DollarSign, Signature, ThumbsUp, TrendingUp, Users, Volume2 } from 'lucide-react';
import Snack from '~/components/Snack';

import type { LucideIcon } from 'lucide-react';

const snacks: { icon: React.ElementType; description: string }[] = [
    { icon: DollarSign, description: 'Passive Revenue' },
    { icon: TrendingUp, description: 'Athletic Hot-spot' },
    { icon: ThumbsUp, description: 'Member Engagement' },
    { icon: Signature, description: 'Drive New Memberships' },
    { icon: Volume2, description: 'Word of Mouth Growth' },
]

const HubBenefits: React.FC = () => {
    return (
        <section>
            <div className='flex flex-col justify-center items-center gap-8 my-16 w-full'>
                {/* Snacks and Desc */}
                <div className='text-center gap-2 justify-center flex flex-col px-4'>
                    <div className='w-full flex flex-col items-center'>
                        <h2 className=''>Hub Benefits</h2>
                        <h6 className='text-neutral-500 text-center'>
                            Harness the revenue and popularity opportunities
                            through HeartHero Hub Locations.
                        </h6>
                    </div>

                    <div className='flex flex-wrap justify-center gap-4 mt-8'>
                        {snacks.map((snack, index) => (
                            <Snack key={index} icon={snack.icon}>
                                {snack.description}
                            </Snack>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HubBenefits;