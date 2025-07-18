import React, { type ReactElement} from 'react';
import { UsersFourIcon, type Icon } from '@phosphor-icons/react';
import Snack from '~/components/Snack';

const snacks: { icon: ReactElement<Icon>; description: string }[] = [
    { icon: <UsersFourIcon />, description: 'This is a description for Snack 1' },
    { icon: <UsersFourIcon />, description: 'This is a description for Snack 2' },
    { icon: <UsersFourIcon />, description: 'This is a description for Snack 3' },
]

const HubBenefits: React.FC = () => {
    return (
        <section>
           <div>
            {/* Snacks and Desc */}
            <div className='flex flex-wrap gap-8 '>
                {snacks.map((snack, index) => (
                    <Snack key={index} icon={snack.icon} color='green'>
                        {snack.description}
                    </Snack>
                ))}
            </div>
           </div>
        </section>
    );
};

export default HubBenefits;