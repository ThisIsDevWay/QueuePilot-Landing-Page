"use client";
import { useTranslation } from '@/contexts/LocaleContext';
import { useEffect, useState } from 'react';

export default function PrivacyPolicyContent() {
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
      <p>{t('privacyPolicy.lastUpdated', { date: displayDate || t('privacyPolicy.loadingDate') })}</p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('privacyPolicy.section1.title')}</h2>
      <p>
        {t('privacyPolicy.section1.paragraph1', { email: t('footer.email') })}
      </p>
      <p>
        {t('privacyPolicy.section1.paragraph2')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('privacyPolicy.section2.title')}</h2>
      <p>
        {t('privacyPolicy.section2.paragraph1')}
      </p>
      <p>
        {t('privacyPolicy.section2.paragraph2')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('privacyPolicy.section3.title')}</h2>
      <p>
        {t('privacyPolicy.section3.paragraph1')}
      </p>
      <ul className="list-disc pl-5">
        <li>{t('privacyPolicy.section3.listItem1')}</li>
        <li>{t('privacyPolicy.section3.listItem2')}</li>
        <li>{t('privacyPolicy.section3.listItem3')}</li>
        <li>{t('privacyPolicy.section3.listItem4')}</li>
        <li>{t('privacyPolicy.section3.listItem5')}</li>
        <li>{t('privacyPolicy.section3.listItem6')}</li>
        <li>{t('privacyPolicy.section3.listItem7')}</li>
        <li>{t('privacyPolicy.section3.listItem8')}</li>
        <li>{t('privacyPolicy.section3.listItem9')}</li>
      </ul>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('privacyPolicy.section4.title')}</h2>
      <p>
        {t('privacyPolicy.section4.paragraph1')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('privacyPolicy.section5.title')}</h2>
      <p>
        {t('privacyPolicy.section5.paragraph1')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('privacyPolicy.section6.title')}</h2>
      <p>
        {t('privacyPolicy.section6.paragraph1')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('privacyPolicy.section7.title')}</h2>
      <p>
        {t('privacyPolicy.section7.paragraph1')}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('privacyPolicy.section8.title')}</h2>
      <p>
        {t('privacyPolicy.section8.paragraph1', { lastUpdated: t('privacyPolicy.lastUpdatedLabel') })}
      </p>

      <h2 className="font-headline text-primary !text-lg sm:!text-xl !mb-2">{t('privacyPolicy.section9.title')}</h2>
      <p>
        {t('privacyPolicy.section9.paragraph1', { email: t('footer.email') })}
      </p>
      <p>
        {t('privacyPolicy.section9.companyName')}<br/>
        {t('footer.address')}
      </p>
    </div>
  );
}
