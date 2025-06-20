"use client";

import { useTranslation } from '@/contexts/LocaleContext';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Activity, Bell, BarChart2, Shuffle, Icon as LucideIcon } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import React from 'react';

interface Feature {
  id: string;
  titleKey: string;
  descriptionKey: string;
  iconName: keyof typeof iconComponents;
}

const iconComponents: { [key: string]: React.FC<LucideProps> } = {
  Activity,
  Bell,
  BarChart2,
  Shuffle,
};

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    { id: 'feature1', titleKey: 'features.feature1.title', descriptionKey: 'features.feature1.description', iconName: 'Activity' },
    { id: 'feature2', titleKey: 'features.feature2.title', descriptionKey: 'features.feature2.description', iconName: 'Bell' },
    { id: 'feature3', titleKey: 'features.feature3.title', descriptionKey: 'features.feature3.description', iconName: 'BarChart2' },
    { id: 'feature4', titleKey: 'features.feature4.title', descriptionKey: 'features.feature4.description', iconName: 'Shuffle' },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => {
            const IconComponent = iconComponents[feature.iconName] as React.FC<LucideProps> | undefined;
            return (
              <Card key={feature.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="items-center text-center p-6">
                  {IconComponent && (
                    <div className="p-3 bg-primary/10 rounded-full mb-4 inline-block">
                       <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  )}
                  <CardTitle className="font-headline text-xl text-primary">{t(feature.titleKey)}</CardTitle>
                </CardHeader>
                <CardDescription className="text-center px-6 pb-6 text-foreground/70 flex-grow">
                  {t(feature.descriptionKey)}
                </CardDescription>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
