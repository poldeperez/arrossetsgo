'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Contact() {
  const t = useTranslations('Contact');
  const params = useParams();
  const locale = params.locale as string;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setAccepted(false);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F8F3F1] text-black flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl border border-neutral-800">

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center gap-6 py-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white font-serif">{t('successTitle')}</h2>
                <p className="text-gray-300 font-body">{t('successMessage')}</p>
                <Link
                  href={`/${locale}`}
                  className="mt-2 inline-block bg-[#FF6663] hover:bg-[#f75754] text-white font-bold py-3 px-10 rounded-full transition-colors font-body"
                >
                  {t('successButton')}
                </Link>
              </motion.div>
            ) : (
            <>
            <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold mb-8 text-center text-white font-serif"
            >
                {t('title')}
            </motion.h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2 font-body">{t('name')}</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-600 border border-neutral-700 rounded p-3 text-white focus:outline-none focus:border-[#FF6663] transition-colors font-body" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2 font-body">{t('email')}</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-600 border border-neutral-700 rounded p-3 text-white focus:outline-none focus:border-[#FF6663] transition-colors font-body" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2 font-body">{t('phone')}</label>
                    <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-600 border border-neutral-700 rounded p-3 text-white focus:outline-none focus:border-[#FF6663] transition-colors font-body" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2 font-body">{t('message')}</label>
                    <textarea 
                        name="message"
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-600 border border-neutral-700 rounded p-3 text-white focus:outline-none focus:border-[#FF6663] transition-colors font-body"
                    ></textarea>
                
                <div className="flex items-start gap-3">
                    <input 
                        type="checkbox" 
                        id="privacy"
                        checked={accepted}
                        onChange={(e) => setAccepted(e.target.checked)}
                        required
                        className="mt-1 w-4 h-4 cursor-pointer accent-[#FF6663]"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-200 font-body cursor-pointer">
                        {t('privacyPolicy')}
                    </label>
                </div>

                </div>
                <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className={`w-full bg-[#FF6663] hover:bg-[#f75754] text-white font-bold py-3 rounded transition-colors font-body ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {status === 'loading' ? 'Sending...' : t('sendButton')}
                </button>
                {status === 'error' && (
                    <p className="text-red-400 text-center mt-4">{t('errorMessage')}</p>
                )}
            </form>
            
            <div className="mt-8 text-center text-gray-200 text-sm">
                <p>{t('description')}</p>
                <p>hola@arrossetsgo.com | +34 608 491 298</p>
            </div>
            </>
            )}
        </div>
      </div>
    </div>
  );
}
