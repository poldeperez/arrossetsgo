'use client';

import { useTranslations } from 'next-intl';
import { Instagram, Linkedin } from 'lucide-react';

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
        <div className="flex justify-center items-center space-x-6 mb-6 text-gray-400">
            <a href="https://www.instagram.com/arrossetsgo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/oriol-goset-reche-437727150/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <p className='font-body'>hola@arrossetsgo.com </p>
        </div>

        <p className="text-gray-400 font-body">{t('copyright')}</p>
      </div>
    </footer>
  );
}
