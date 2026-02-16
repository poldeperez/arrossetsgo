'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function History() {
  const t = useTranslations('History');

  return (
    <div className="pt-24 min-h-screen bg-[#F8F3F1] text-white">
      <div className="container mx-auto px-4 py-12">
        <div
            className="max-w-4xl mx-auto text-center mb-16"
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF6663] font-serif">{t('title')}</h1>
            <p className="text-xl text-gray-800 font-body">{t('description')}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
            <div 
                className="bg-gray-800 p-8 rounded-lg border border-gray-900"
            >
                <h3 className="text-2xl font-bold mb-4 font-serif">The Beginning</h3>
                <p className="text-gray-400 leading-relaxed font-body">
                    It all started in 1990 when our founder discovered his passion for traditional rice dishes in Valencia. 
                    Bringing those authentic flavors back was not just a business idea, but a mission.
                </p>
            </div>

            <div 
                className="bg-gray-800 p-8 rounded-lg border border-gray-900"
            >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src="/history-image.jpg"
                        alt="Chef Owner"
                        className="w-32 h-32 rounded-full object-cover border-2 border-[#FF6663]"
                    />
                    <p className="text-gray-400 leading-relaxed font-body">
                        With over 20 years of culinary experience, our chef ensures every grain of rice is cooked to perfection.
                        Passion, dedication, and respect for tradition are the core values he brings to the kitchen every single day.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
