import { ListIcon, XIcon } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Button from '~/hkit/Button';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Personal', path: '/personal' },
    { name: 'Business', path: '/business' }
]

const NavBar: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        handleResize(); // Set initial value

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    return (
        <nav className='fixed z-[999] bg-neutral-800 right-0 left-0 py-2 px-2 m-2 rounded-lg items-center gap-10 justify-between'>
            {isMobile ? (
                // Mobile view
                <div className="flex flex-col items-center justify-between w-full relative">
                    <div className='flex flex-row justify-between w-full'>
                        <Link to={"/"}>
                            <img src="./hh_logo.svg" className='max-w-[8rem]' alt="" />
                        </Link>
                        <Button onClick={() => setMenuOpen(!menuOpen)} appendBefore={<ListIcon/>} label="Menu" size="rounded" variant="secondary" fillWidth={false} />
                    </div>
                    {menuOpen && (
                        <div className=" right-0 mt-2 bg-neutral-800 rounded-lg shadow-lg z-50 p-4">
                            <ul style={{ display: 'block', listStyle: 'none', margin: 0, padding: 0 }}>
                                {navLinks.map(link => (
                                    <li key={link.name}>
                                        <Button link={link.path} onClick={() => setMenuOpen(!menuOpen)}  label={link.name} variant='tertiary' />
                                    </li>
                                ))}
                            </ul>
                            <Button icon={<XIcon />} variant="icon" size="lg" onClick={() => setMenuOpen(false)} fillWidth={true} />
                        </div>
                    )}
                </div>
            ) : (
                // Desktop view
                <div className='flex flex-row justify-between items-center'>
                    {/* Left side */}
                    <div className='flex flex-row items-center gap-8'>
                        <img src="./hh_logo.svg" className='max-w-[10rem]' alt="" />
                        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }} >
                            {navLinks.map(link => (
                                <li key={link.name} style={{ marginRight: '0.5rem' }}>
                                     <Button link={link.path} label={link.name} variant='tertiary' />
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right side */}
                    <div>
                        <Button label="Sign Up" size="rounded" variant="secondary" fillWidth={false} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;