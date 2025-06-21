
"use client";

import { useTranslation } from '@/contexts/LocaleContext';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { GeometricShapes } from '../decoration/GeometricShapes';

interface Step {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageHint: string;
  imageUrl: string;
}

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps: Step[] = [
    { id: 'step1', titleKey: 'howItWorks.step1.title', descriptionKey: 'howItWorks.step1.description', imageHint: 'patient registration', imageUrl: '/howworks/registro.png' },
    { id: 'step2', titleKey: 'howItWorks.step2.title', descriptionKey: 'howItWorks.step2.description', imageHint: 'queue display', imageUrl: '/howworks/pantalla-publica.mp4' },
    { id: 'step3', titleKey: 'howItWorks.step3.title', descriptionKey: 'howItWorks.step3.description', imageHint: 'doctor consultation', imageUrl: '/howworks/consulta.png' },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      <GeometricShapes variant="how-it-works" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="space-y-20 md:space-y-24">
          {steps.map((step, index) => (
            <div key={step.id} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`relative aspect-video max-w-xl mx-auto lg:max-w-none lg:mx-0 rounded-xl shadow-2xl overflow-hidden group ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                {step.imageUrl.endsWith('.mp4') ? (
                  <video
                    src={step.imageUrl}
                    width={800}
                    height={600}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    src={step.imageUrl}
                    alt={t(step.titleKey)}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={step.imageHint}
                  />
                )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">{t(step.titleKey)}</h3>
                <p className="text-foreground/90 mb-8">{t(step.descriptionKey)}</p>
                <Button asChild size="lg">
                  <Link href="/demo">
                    {t('howItWorks.ctaButton')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
