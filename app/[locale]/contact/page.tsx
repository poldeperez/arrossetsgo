'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Contact() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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
    
    // Placeholder for Resend API integration
    // const response = await fetch('/api/send', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    
    // Simulate API call
    setTimeout(() => {
        console.log('Form submitted:', formData);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

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
                    <label className="block text-sm font-medium text-gray-200 mb-2 font-body">{t('message')}</label>
                    <textarea 
                        name="message"
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-600 border border-neutral-700 rounded p-3 text-white focus:outline-none focus:border-[#FF6663] transition-colors font-body"
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className={`w-full bg-[#FF6663] hover:bg-[#f75754] text-white font-bold py-3 rounded transition-colors font-body ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {status === 'loading' ? 'Sending...' : t('sendButton')}
                </button>
                {status === 'success' && (
                    <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-400 text-center mt-4">Something went wrong. Please try again.</p>
                )}
            </form>
            
            <div className="mt-8 text-center text-gray-200 text-sm">
                <p>{t('description')}</p>
                <p>hola@arrossetsgo.com | +34 608 491 298</p>
            </div>
        </div>
      </div>
    </div>
  );
}
