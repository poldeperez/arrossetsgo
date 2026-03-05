'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const HERO_IMAGES = [
  '/hero1.jpg', 
  '/hero2.jpg',
  '/hero3.jpg',
  '/hero4.jpg'
];

export default function Hero() {
  const t = useTranslations('Home');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full"
          >
             <Image
                src={HERO_IMAGES[currentImageIndex]}
                alt="Hero Background"
                fill
                priority={true} // Priority loading creates better LCP
                quality={100}
                className="object-cover object-center"
              />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold font-serif text-white mb-6 tracking-tight leading-tight uppercase"
        >
          {t('heroTitle')}
        </motion.h1>
      </div>
    </section>
  );
}