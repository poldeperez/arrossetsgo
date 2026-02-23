'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import InstagramFeed from '../../components/InstagramFeed';
import Hero from '../../components/Hero';

export default function Home() {
  const t = useTranslations('Home');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <>
      <Hero />

      {/* Info Section */}
      <section className="py-24 bg-[#F8F3F1] text-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div 
                className="w-full md:w-1/2"
            >
                <img 
                    src="info-image.jpg" 
                    alt="Cooking Paella" 
                    className="rounded-lg shadow-2xl w-full h-110 object-cover"
                />
            </div>
            <div 
                className="w-full md:w-1/2"
            >
                <h2 className="text-4xl font-bold mb-6 text-[#FF6663] font-serif">{t('infoTitle')}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-body">
                    {t('infoText')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-body">
                    {t('infoText2')}
                </p>
                
                <Link 
                  href={`/${locale}/contact`} 
                  className="inline-block bg-gray-800 text-white font-body py-3 px-10 rounded-full text-lg border border-transparent hover:bg-[#F8F3F1] hover:text-gray-800 hover:border-gray-800 transition-all duration-300"
                >
                  {t('bookButton')}
                </Link>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 text-[#FF6663] font-serif"
          >
            {t('servicesTitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed mb-12 font-body"
          >
            {t('servicesText')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href={`/${locale}/services`} 
              className="inline-block border border-white text-white font-body py-3 px-10 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              {t('servicesButton')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#F8F3F1] overflow-hidden">
        <div className="container mx-auto px-4 relative">
            <div className="flex flex-col gap-32 max-w-6xl mx-auto">
              
              {/* Image 1 & 2: Side by Side (Offset) */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full items-start">
                  
                  {/* Image 1: Left - Higher */}
                  <motion.div 
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="relative w-full md:w-5/12 h-125"
                  >
                      <img 
                          src="/image1.jpg" 
                          alt="Gallery Image 1" 
                          className="w-full h-full object-cover rounded-sm shadow-2xl filter brightness-90 hover:brightness-100 transition-all duration-700"
                      />
                  </motion.div>

                  {/* Image 2: Right - Lower (Top margin added) */}
                  <motion.div 
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                      className="relative w-full md:w-5/12 h-125 mt-0 md:mt-32 ml-auto"
                  >
                      <img 
                          src="/image2.jpg" 
                          alt="Gallery Image 2" 
                          className="w-full h-full object-cover rounded-sm shadow-2xl filter brightness-90 hover:brightness-100 transition-all duration-700"
                      />
                  </motion.div>

              </div>

              {/* Image 3: True Center */}
              <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="relative w-full md:w-8/12 h-150 self-center mx-auto"
              >
                  <img 
                      src="/image3.jpg" 
                      alt="Gallery Image 3" 
                      className="w-full h-full object-cover rounded-sm shadow-2xl filter brightness-90 hover:brightness-100 transition-all duration-700"
                  />
              </motion.div>

              {/* Image 4 & History Text Section */}
              <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl mx-auto">
                {/* History Text - Left */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 text-left"
                >
                  <h3 className="text-4xl font-bold mb-6 text-[#FF6663] font-serif">{t('historyTitle')}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 font-body">
                    {t('historyText')}
                  </p>
                  <Link 
                    href={`/${locale}/history`} 
                    className="inline-block border border-gray-800 text-gray-800 font-body py-3 px-8 rounded-full text-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    {t('historyButton')}
                  </Link>
                </motion.div>

                {/* Image 4 - Right */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative w-full md:w-1/2 h-137"
                >
                    <img 
                        src="/image4.jpg" 
                        alt="Gallery Image 4" 
                        className="w-full h-full object-cover rounded-sm shadow-2xl filter brightness-90 hover:brightness-100 transition-all duration-700"
                    />
                </motion.div>
              </div>

              {/* Image 5: Center */}
              <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="relative w-full md:w-4/5 h-162 self-center mx-auto"
              >
                  <img 
                      src="/image5.jpg" 
                      alt="Gallery Image 5" 
                      className="w-full h-full object-cover rounded-sm shadow-2xl filter brightness-90 hover:brightness-100 transition-all duration-700"
                  />
              </motion.div>

               {/* Image 6: Left-Bottom */}
               <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="relative w-full md:w-1/2 h-100 self-start md:ml-20"
              >
                  <img 
                      src="/image6.jpg" 
                      alt="Gallery Image 6" 
                      className="w-full h-full object-cover rounded-sm shadow-2xl filter brightness-90 hover:brightness-100 transition-all duration-700"
                  />
              </motion.div>

            </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />
    </>
  );
}
