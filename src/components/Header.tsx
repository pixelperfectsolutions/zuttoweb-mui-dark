import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// Navigation items
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Travel Hub', path: '/travel-hub' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Privacy', path: '/privacy' },
  { name: 'Terms', path: '/terms' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > prevScrollPos && current > 100);
      setPrevScrollPos(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'} bg-neutral-900/60 backdrop-blur-md`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-3">
        <RouterLink to="/" className="font-montserrat font-bold text-xl tracking-wider text-white hover:text-yellow-400 transition-colors">
          ZUTTO
        </RouterLink>
        <nav className="flex gap-2 md:gap-3">
          {navItems.map((item) => (
            <RouterLink
              key={item.path}
              to={item.path}
              className={`px-3 py-1 rounded-md font-montserrat text-sm md:text-base transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-neutral-800 text-yellow-400 font-semibold shadow'
                  : 'text-white hover:bg-neutral-800 hover:text-yellow-400'
              }`}
            >
              {item.name}
            </RouterLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
