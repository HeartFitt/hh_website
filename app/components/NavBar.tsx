import React from 'react';
import { Link } from 'react-router';
import Button from '~/hkit/Button';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Personal', path: '/personal' },
    { name: 'Business', path: '/business' }
]

const NavBar: React.FC = () => {
    return (
        <nav className='flex flex-row bg-neutral-800 p-4 m-2 rounded-lg items-center gap-10 justify-between'>
            {/* Left side */}
            <div className='flex flex-row items-center gap-8'>
                <img src="./hh_logo.svg" className='max-w-[10rem]' alt="" />
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                    {navLinks.map(link => (
                        <li key={link.name} style={{ marginRight: '1rem' }}>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Right side */}
            <div>
                <Button label="Sign Up" size="rounded" variant="secondary" fillWidth={false} />
            </div>
        </nav>
    );
};

export default NavBar;