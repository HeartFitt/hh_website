import React, { type ReactElement} from 'react';
import { type Icon, SmileyIcon } from '@phosphor-icons/react';
import clsx from 'clsx';

type snackProps = {
    icon: React.ReactElement<Icon>,
    color?: string | 'green' | 'blue' | 'red' | 'yellow' | 'orange';
    children?: React.ReactNode;
}

const Snack: React.FC<snackProps> = ({ 
    icon = <SmileyIcon />,
    color = 'default',
    children,
}: snackProps) => {
    return (
        <div className='flex flex-row items-center gap-4 bg-neutral-800 border rounded-xl p-1 pr-4 border-neutral-700'>
            <div className={`${clsx({ 
                'bg-neutral-700':color === 'default',
                'bg-green-500':color === 'green',
                'bg-blue-500':color === 'blue',
                'bg-red-500':color === 'red',
                'bg-yellow-500':color === 'yellow',
                'bg-orange-500':color === 'orange',
                // other
            })} p-4 rounded-lg`}>
                {React.cloneElement(icon, {size: 24, weight: 'bold' })}
            </div>
            <span className="text-[16px] sm:text-[20px] leading-tight">{children}</span>
        </div>
    );
};

export default Snack;