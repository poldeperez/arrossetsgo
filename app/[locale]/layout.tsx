import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Playfair_Display, Courier_Prime } from 'next/font/google';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SmoothScrolling from '../../components/SmoothScrolling';
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const courier = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-courier',
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
      <body className={`${playfair.variable} ${courier.variable} antialiased bg-neutral-950 text-neutral-200 font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <SmoothScrolling>
            <Header locale={locale} />
            <main className="min-h-screen pt-0 font-body">
            {children}
            </main>
            <Footer />
          </SmoothScrolling>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
