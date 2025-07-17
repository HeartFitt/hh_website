import React from 'react';
import { Link } from 'react-router';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Personal', path: '/personal' },
    { name: 'Business', path: '/business' }
]

const NavBar: React.FC = () => {
    return (
        <nav className='bg-neutral-800 p-4 m-2 rounded-lg'>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                {navLinks.map(link => (
                    <li key={link.name} style={{ marginRight: '1rem' }}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;