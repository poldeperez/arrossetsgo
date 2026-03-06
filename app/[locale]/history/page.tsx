'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Mail, Instagram } from 'lucide-react';

export default function History() {
  const t = useTranslations('History');
  const s = useTranslations('Services');

  return (
    <div className="pt-24 min-h-screen bg-[#F8F3F1] text-white">
      <div className="container mx-auto px-4 py-12">
        <div
            className="max-w-4xl mx-auto text-center mb-6"
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#FF6663] font-serif">{t('title')}</h1>
            <p className="text-l text-gray-800 leading-relaxed font-body">{t('text1')}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
            <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden">
                <Image 
                    src="/history2.jpg"
                    alt="History"
                    width={800}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div 
                className=""
            >
                <p className="text-gray-800 leading-relaxed font-body py-4">
                    {t('text2')}
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
                <div className="w-full md:w-1/2 relative bg-gray-600 rounded-lg overflow-hidden">
                    <Image 
                        src="/history3.jpg"
                        width={600}
                        height={400}
                        alt="Chef Owner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div 
                    className="w-full md:w-1/2 p-8 rounded-lg border border-gray-400 flex flex-col justify-center"
                >
                    <p className="text-gray-800 leading-relaxed font-body">
                        {t('text3')}
                    </p>
                </div>
            </div>
        </div>
        <div className="mt-16 text-center font-body md:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-[#FF6663]">{s('contactInfo')}</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                <a href="mailto:hola@arrossetsgo.com" className="flex items-center gap-3 text-lg text-gray-800 hover:text-[#FF6663] transition-colors">
                    <Mail className="w-6 h-6" />
                    <span>hola@arrossetsgo.com</span>
                </a>
                <a href="https://instagram.com/arrossetsgo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-gray-800 hover:text-[#FF6663] transition-colors">
                    <Instagram className="w-6 h-6" />
                    <span>@arrossetsgo</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}
