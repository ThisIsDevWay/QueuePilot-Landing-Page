"use client";

import { useTranslation } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Image src="/hero/logo-white.png" alt={t('appName')} width={64} height={64} className="mx-auto mb-6 opacity-80" />
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-xl mx-auto mb-10">
          {t('cta.subtitle')}
        </p>
        <Button 
          asChild 
          size="lg" 
          variant="secondary" 
          className="bg-background text-primary hover:bg-background/90 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          <Link href="/demo">
                    {t('howItWorks.ctaButton')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
