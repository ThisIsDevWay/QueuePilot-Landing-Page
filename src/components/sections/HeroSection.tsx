
"use client";

import { useTranslation } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { GeometricShapes } from '../decoration/GeometricShapes';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32 lg:py-40 overflow-hidden">
      <GeometricShapes variant="hero" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-10 max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#features">
                  {t('hero.secondaryButton')}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video max-w-xl mx-auto lg:max-w-none lg:mx-0 rounded-xl shadow-2xl overflow-hidden group">
             <Image 
                src="/hero/hero.png"
                alt="QueuePilot application showcase"
                width={800}
                height={600}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="queue management system"
                priority
              />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
