"use client";

import { useTranslation } from '@/contexts/LocaleContext';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quoteKey: string;
  authorKey: string;
  companyKey: string;
  avatar: string;
  avatarFallback: string;
}

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [
    { id: 'testimonial1', quoteKey: 'testimonials.testimonial1.quote', authorKey: 'testimonials.testimonial1.author', companyKey: 'testimonials.testimonial1.company', avatar: 'https://placehold.co/100x100.png', avatarFallback: 'SL' },
    { id: 'testimonial2', quoteKey: 'testimonials.testimonial2.quote', authorKey: 'testimonials.testimonial2.author', companyKey: 'testimonials.testimonial2.company', avatar: 'https://placehold.co/100x100.png', avatarFallback: 'JB' },
    { id: 'testimonial3', quoteKey: 'testimonials.testimonial3.quote', authorKey: 'testimonials.testimonial3.author', companyKey: 'testimonials.testimonial3.company', avatar: 'https://placehold.co/100x100.png', avatarFallback: 'MG' },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-secondary/20 flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <Quote className="h-8 w-8 text-primary/50 mb-4" />
                <p className="text-foreground/90 italic mb-6 flex-grow">"{t(testimonial.quoteKey)}"</p>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={t(testimonial.authorKey)} data-ai-hint="person portrait" />
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{t(testimonial.authorKey)}</p>
                    <p className="text-sm text-foreground/70">{t(testimonial.companyKey)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
