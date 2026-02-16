'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <div className="pt-24 min-h-screen bg-[#F8F3F1] text-black flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl border border-neutral-800">
            <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold mb-8 text-center text-white font-serif"
            >
                {t('title')}
            </motion.h1>
            
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2 font-body">Name</label>
                    <input type="text" className="w-full bg-gray-600 border border-neutral-700 rounded p-3 text-white focus:outline-none focus:border-[#FF6663] transition-colors font-body" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2 font-body">Email</label>
                    <input type="email" className="w-full bg-gray-600 border border-neutral-700 rounded p-3 text-white focus:outline-none focus:border-[#FF6663] transition-colors font-body" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2 font-body">Message</label>
                    <textarea rows={4} className="w-full bg-gray-600 border border-neutral-700 rounded p-3 text-white focus:outline-none focus:border-[#FF6663] transition-colors font-body"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#FF6663] hover:bg-[#f75754] text-white font-bold py-3 rounded transition-colors font-body">
                    Send Message
                </button>
            </form>
            
            <div className="mt-8 text-center text-gray-200 text-sm">
                <p>{t('description')}</p>
                <p>info@arrossetsgo.com | +34 123 456 789</p>
            </div>
        </div>
      </div>
    </div>
  );
}
