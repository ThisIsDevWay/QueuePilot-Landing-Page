import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LocaleProvider } from '@/contexts/LocaleContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'QueuePilot - Effortless Queue Management',
    template: '%s | QueuePilot',
  },
  description: 'QueuePilot offers a seamless solution to manage queues, reduce wait times, and improve customer satisfaction. Optimize your operations today!',
  keywords: ['queue management', 'customer flow', 'wait time reduction', 'QueuePilot', 'business optimization', 'gestión de colas', 'flujo de clientes', 'reducción de tiempo de espera'],
  openGraph: {
    title: 'QueuePilot - Effortless Queue Management',
    description: 'Streamline your operations with QueuePilot. Reduce wait times and enhance customer satisfaction.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    // url: 'YOUR_APP_URL', // Replace with your actual URL
    // siteName: 'QueuePilot', // Replace with your site name
    // images: [ // Add a preview image
    //   {
    //     url: 'YOUR_PREVIEW_IMAGE_URL',
    //     width: 1200,
    //     height: 630,
    //     alt: 'QueuePilot Application Preview',
    //   },
    // ],
  },
  // twitter: { // Add Twitter card metadata if desired
  //   card: 'summary_large_image',
  //   title: 'QueuePilot - Effortless Queue Management',
  //   description: 'Streamline your operations with QueuePilot. Reduce wait times and enhance customer satisfaction.',
  //   // site: '@yourtwitterhandle',
  //   // creator: '@yourtwitterhandle',
  //   // images: ['YOUR_TWITTER_IMAGE_URL'],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <LocaleProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </LocaleProvider>
      </body>
    </html>
  );
}
