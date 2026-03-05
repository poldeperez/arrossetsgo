import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { Permanent_Marker } from 'next/font/google';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SmoothScrolling from '../../components/SmoothScrolling';
import "../globals.css";
import { Analytics } from "@vercel/analytics/next"

const courier = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-courier',
  display: 'swap',
});

const serialAlternate = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serial-alternate',
  display: 'swap',
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  if (!['en', 'es', 'ca'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={`${serialAlternate.variable} ${courier.variable} antialiased bg-neutral-950 text-neutral-200 font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <SmoothScrolling>
            <Header locale={locale} />
            <main className="min-h-screen pt-0 font-body">
              {children}
            </main>
            <Footer />
          </SmoothScrolling>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
