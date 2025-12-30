import { ArrowUp } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
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
  icon={<ArrowUp/>}
      >
        ↑ Return to Top
      </Button>
      <Link to="/privacy-policy" className="mt-4 text-sm text-neutral-400 underline">
        Privacy Policy
      </Link>
      <p className="mt-2 text-xs text-neutral-500">© {new Date().getFullYear()} HeartHero Fitness LLC</p>
    </footer>
  );
};

export default Footer;
