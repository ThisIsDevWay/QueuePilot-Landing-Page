"use client";
import { useTranslation } from '@/contexts/LocaleContext';
import { useEffect, useState } from 'react';

export default function TermsOfServiceContent() {
  const { t, locale } = useTranslation();
  const [displayDate, setDisplayDate] = useState('');

  useEffect(() => {
    // This ensures date is only generated on client to avoid hydration issues
    setDisplayDate(new Date().toLocaleDateString(locale || navigator.language || 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    }));
  }, [locale]);

  return (
    <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground/90">
      <p>{t('termsOfService.lastUpdated', { date: displayDate || t('termsOfService.loadingDate') })}</p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('termsOfService.section1.title')}</h2>
      <p>
        {t('termsOfService.section1.paragraph1')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('termsOfService.section2.title')}</h2>
      <p>
        {t('termsOfService.section2.paragraph1')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('termsOfService.section3.title')}</h2>
      <p>
        {t('termsOfService.section3.paragraph1')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('termsOfService.section4.title')}</h2>
      <p>
        {t('termsOfService.section4.paragraph1')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('termsOfService.section5.title')}</h2>
      <p>
        {t('termsOfService.section5.paragraph1')}
      </p>
      <ul className="list-disc pl-5">
        <li>{t('termsOfService.section5.listItem1')}</li>
        <li>{t('termsOfService.section5.listItem2')}</li>
        <li>{t('termsOfService.section5.listItem3')}</li>
      </ul>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('termsOfService.section6.title')}</h2>
      <p>
        {t('termsOfService.section6.paragraph1')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('termsOfService.section7.title')}</h2>
      <p>
        {t('termsOfService.section7.paragraph1')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('termsOfService.section8.title')}</h2>
      <p>
        {t('termsOfService.section8.paragraph1')}
      </p>
      
      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('termsOfService.section9.title')}</h2>
      <p>
        {t('termsOfService.section9.paragraph1', { email: t('footer.email') })}
      </p>
    </div>
  );
}
