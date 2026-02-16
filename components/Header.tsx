'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('Navigation');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Helper to switch languages
  const getLangUrl = (newLocale: string) => {
    return pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
  };

  const navLinks = [
    { name: t('home'), href: `/${locale}` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('history'), href: `/${locale}/history` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  // Determine if we are on the home page
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  // Determine styles based on state
  // Header is solid if:
  // 1. We are scrolled down
  // 2. The menu is open
  // 3. We are NOT on the home page (other pages usually don't have a dark hero image at the top)
  const isSolid = isScrolled || isMenuOpen || !isHome;
  
  const textColorClass = isSolid ? 'text-neutral-900' : 'text-white';
  const logoClass = isSolid ? '' : 'brightness-0 invert'; // Default logo is black, invert makes it white
  const headerBgClass = isSolid ? 'bg-[#f8f3f1] shadow-sm' : 'bg-transparent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-60 transition-colors duration-300 py-2 ${headerBgClass}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center h-16">
          
          {/* LEFT: Burger Icon */}
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColorClass} hover:text-[#FF6663] transition-colors p-2 cursor-pointer`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* CENTER: Logo */}
          <div className="flex-1 flex justify-center">
            <Link 
              href={`/${locale}`} 
              className="relative h-20 w-56 flex justify-center items-center"
              onClick={() => setIsMenuOpen(false)}
            >
               <img 
                 src="/LOGO-NEGRO.png" 
                 alt="Arrossets Logo" 
                 className={`h-full object-contain transition-all duration-300 ${logoClass}`} 
               />
            </Link>
          </div>

          {/* RIGHT: Booking & Langs */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <Link 
              href={`/${locale}/contact`} 
              className={`hidden md:block uppercase tracking-widest text-md hover:text-[#FF6663] transition-colors ${textColorClass} font-body`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>

            <span className={`hidden md:block text-sm font-light ${textColorClass} opacity-50`}>
              |
            </span>

            <div className={`hidden md:flex text-md font-medium gap-3 ${textColorClass} font-body`}>
              {['ca', 'es', 'en'].map((lang) => (
                <Link 
                  key={lang}
                  href={getLangUrl(lang)} 
                  className={`uppercase hover:text-[#FF6663] transition-colors ${pathname.startsWith(`/${lang}`) ? 'text-[#FF6663]' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {lang}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* FULL PAGE MENU OVERLAY - CURTAIN EFFECT */}
      <div 
        className={`fixed inset-0 bg-[#f8f3f1] z-50 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-4xl md:text-6xl font-bold text-neutral-900 uppercase tracking-tighter hover:text-[#FF6663] transition-colors font-serif"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Language Switcher (inside menu) */}
        <div className="mt-16 flex gap-8">
          {['ca', 'es', 'en'].map((lang) => (
            <Link 
              key={lang}
              href={getLangUrl(lang)} 
              className={`text-xl uppercase font-bold hover:text-[#FF6663] transition-colors font-body ${pathname.startsWith(`/${lang}`) ? 'text-[#FF6663]' : 'text-neutral-500'}`}
            >
              {lang}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
