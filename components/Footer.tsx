'use client';

import { useTranslations } from 'next-intl';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 border-t border-neutral-800">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        {/* Logo - White version (inverted) */}
        <div className="mb-3 h-16 w-48 relative">
           <img 
             src="/LOGO-NEGRO.png" 
             alt="Arrossets Logo" 
             className="h-full w-full object-contain filter invert brightness-0" 
           />
        </div>
        
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6 text-gray-400 hover:text-white transition-colors duration-300">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <span>|</span>
            <p className='font-body'>info@arrossetsgo.com </p>
        </div>

        <p className="text-gray-400 font-body">{t('copyright')}</p>
      </div>
    </footer>
  );
}
