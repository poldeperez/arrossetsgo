'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
            <div className="space-y-6 text-lg leading-relaxed font-body text-gray-800">
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
        </div>
      </div>
    </div>
  );
}
