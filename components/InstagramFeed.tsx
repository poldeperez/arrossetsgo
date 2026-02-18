'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

const POSTS = [
  { id: 1, src: '/image1.jpg', alt: 'Instagram Post 1', link: 'https://instagram.com' },
  { id: 2, src: '/image2.jpg', alt: 'Instagram Post 2', link: 'https://instagram.com' },
  { id: 3, src: '/image3.jpg', alt: 'Instagram Post 3', link: 'https://instagram.com' },
  { id: 4, src: '/image4.jpg', alt: 'Instagram Post 4', link: 'https://instagram.com' },
];

export default function InstagramFeed() {
  const t = useTranslations('Home');

  return (
    <section className="py-24 bg-white text-neutral-900">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <Instagram size={40} className="text-neutral-900" />
            <h2 className="text-4xl font-bold font-serif">{t('followUs')}</h2>
            <a 
              href="https://instagram.com/arrossetsgo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-body text-gray-500 hover:text-[#FF6663] transition-colors"
            >
              @arrossetsgo
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {POSTS.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-gray-100 block"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-body font-bold tracking-widest uppercase text-sm border-b pb-1 border-white">
                  {t('viewProfile')}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
