'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import yetImg from '@/assets/yet.png';

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'How It Works', to: 'howitworks' },
  { label: 'Features', to: 'features' },
  { label: '$YET Token', to: 'token' },
  { label: 'Roadmap', to: 'roadmap' },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  // Smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, to: string) => {
    e.preventDefault();
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="w-full dark:bg-[color:var(--header-bg)]/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between ">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center md:gap-1 gap-2 font-bold text-primary logo text-ms md:text-xl ">
          <Logo />
        </Link>
        {/* Navigation - hidden on mobile */}
        <nav className="hidden md:flex gap-6 text-base font-medium text-gray-200 uppercase">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              onClick={(e) => handleNavClick(e, item.to)}
              className="hover:text-primary dark:hover:text-primary-focus transition cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>
        {/* Right side: Buy $YET button */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <a
              href="https://jup.ag/tokens/2sHMQ2ZUt3uk7zDDyMwCQXT3mqFVP7NdVQ7NWvPRpump"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white font-bold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-primary transition-all duration-200 focus:outline-none backdrop-blur-md text-base text-nowrap"
              style={{ boxShadow: '0 4px 24px 0 rgba(99,232,128,0.15)' }}
            >
              Buy $YET
              {/* <img srcSet={yetImg.src} alt="YET" className="w-7 h-7 ml-1" /> */}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 