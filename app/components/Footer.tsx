import { ArrowUpIcon } from '@phosphor-icons/react';
import React from 'react';
import Button from '~/hkit/Button';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full py-6 px-4 flex flex-col items-center justify-center border-t border-neutral-700 bg-neutral-800">
      <Button
        onClick={scrollToTop}
        variant='icon'
        icon={<ArrowUpIcon/>}
      >
        ↑ Return to Top
      </Button>
      <p className="mt-2 text-xs text-neutral-500">© {new Date().getFullYear()} Heartfitt LLC</p>
    </footer>
  );
};

export default Footer;
