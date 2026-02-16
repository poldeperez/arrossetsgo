'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Services() {
  const t = useTranslations('Services');

  return (
    <div className="pt-24 min-h-screen bg-[#F8F3F1] text-black">
      <div className="container mx-auto px-4 py-12">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#FF6663] font-serif"
        >
          {t('title')}
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
            >
                <img 
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070" 
                    alt="Catering Service" 
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                />
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Events & Catering</h3>
                <p className="text-gray-800 text-lg leading-relaxed mb-6 font-body">
                    {t('description')}
                </p>
                <ul className="space-y-4 text-gray-800 font-body">
                    <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#FF6663] rounded-full mr-3"></span>
                        Private Parties
                    </li>
                    <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#FF6663] rounded-full mr-3"></span>
                        Corporate Events
                    </li>
                    <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#FF6663] rounded-full mr-3"></span>
                        Weddings
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
