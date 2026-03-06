'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Mail, Instagram } from 'lucide-react';

export default function Services() {
  const t = useTranslations('Services');

  return (
    <div className="pt-24 min-h-screen bg-[#F8F3F1] text-black">
      <div className="container mx-auto px-4 py-12">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#FF6663] font-serif"
        >
          {t('eventsTitle')}
        </h1>
        
        <div className="max-w-[1100] mx-auto mb-16">
            <div className="space-y-6 text-lg leading-relaxed font-body text-gray-800 text-center">
                <p>{t('paragraph1')}</p>
                <p>{t('paragraph2')}</p>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Meetings */}
             <div className="relative w-full aspect-4/5 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <Image 
                    src="/info-image.jpg" 
                    alt={t('meetingsTitle')} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                     <h4 className="text-2xl font-bold font-serif text-white text-center drop-shadow-lg z-10">
                        {t('meetingsTitle')}
                    </h4>
                </div>
            </div>

            {/* Socials */}
            <div className="relative w-full aspect-4/5 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <Image 
                    src="/image5.jpg" 
                    alt={t('socialsTitle')} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />
                 <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h4 className="text-2xl font-bold font-serif text-white text-center drop-shadow-lg z-10">
                        {t('socialsTitle')}
                    </h4>
                </div>
            </div>

            {/* Enterprises */}
            <div className="relative w-full aspect-4/5 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <Image 
                    src="/image1.jpg" 
                    alt={t('enterprisesTitle')} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h4 className="text-2xl font-bold font-serif text-white text-center drop-shadow-lg z-10">
                        {t('enterprisesTitle')}
                    </h4>
                </div>
            </div>

        <div className="mt-16 text-center font-body md:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-[#FF6663]">{t('contactInfo')}</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                <a href="mailto:hola@arrossetsgo.com" className="flex items-center gap-3 text-lg hover:text-[#FF6663] transition-colors">
                    <Mail className="w-6 h-6" />
                    <span>hola@arrossetsgo.com</span>
                </a>
                <a href="https://instagram.com/arrossetsgo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-[#FF6663] transition-colors">
                    <Instagram className="w-6 h-6" />
                    <span>@arrossetsgo</span>
                </a>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
