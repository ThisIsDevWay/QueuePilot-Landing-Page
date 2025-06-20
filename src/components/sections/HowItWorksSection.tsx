"use client";

import { useTranslation } from '@/contexts/LocaleContext';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Settings, Smartphone, Users, Smile, Icon as LucideIcon } from 'lucide-react';
import Image from 'next/image';
import type { LucideProps } from 'lucide-react';
import React from 'react';

interface Step {
  id: string;
  titleKey: string;
  descriptionKey: string;
  iconName: keyof typeof iconComponents;
}

const iconComponents: { [key: string]: React.FC<LucideProps> } = {
  Settings,
  Smartphone,
  Users,
  Smile,
};


const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps: Step[] = [
    { id: 'step1', titleKey: 'howItWorks.step1.title', descriptionKey: 'howItWorks.step1.description', iconName: 'Settings' },
    { id: 'step2', titleKey: 'howItWorks.step2.title', descriptionKey: 'howItWorks.step2.description', iconName: 'Smartphone' },
    { id: 'step3', titleKey: 'howItWorks.step3.title', descriptionKey: 'howItWorks.step3.description', iconName: 'Users' },
    { id: 'step4', titleKey: 'howItWorks.step4.title', descriptionKey: 'howItWorks.step4.description', iconName: 'Smile' },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none lg:mx-0 rounded-xl shadow-xl overflow-hidden">
            <Image
              src="https://placehold.co/600x600.png"
              alt={t('howItWorks.title')}
              width={600}
              height={600}
              className="object-cover w-full h-full"
              data-ai-hint="workflow diagram"
            />
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = iconComponents[step.iconName] as React.FC<LucideProps> | undefined;
              return (
                <div key={step.id} className="flex items-start gap-4">
                  {IconComponent && (
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-primary mb-1">{t(step.titleKey)}</h3>
                    <p className="text-foreground/70">{t(step.descriptionKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
