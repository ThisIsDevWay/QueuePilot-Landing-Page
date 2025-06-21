"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enTranslations from '@/locales/en.json';
import esTranslations from '@/locales/es.json';

type Locale = 'en' | 'es';

interface Translations {
  [key: string]: string | Translations;
}

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translations: Record<Locale, Translations>;
  t: (key: string, options?: { [key: string]: string | number }) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const allTranslations: Record<Locale, Translations> = {
  en: enTranslations,
  es: esTranslations,
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedLocale = localStorage.getItem('queuepilot-locale') as Locale;
    if (storedLocale && (storedLocale === 'en' || storedLocale === 'es')) {
      setLocaleState(storedLocale);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es') {
        setLocaleState('es');
      } else {
        setLocaleState('en');
      }
    }
  }, []);
  
  useEffect(() => {
    if (isMounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, isMounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (isMounted) {
      localStorage.setItem('queuepilot-locale', newLocale);
    }
  };

  const t = (key: string, options?: { [key: string]: string | number }): string => {
    // On the first render (server-side and initial client-side), we return the key
    // to prevent a hydration mismatch. The actual translation will render
    // after the component has mounted on the client.
    if (!isMounted) {
      return key;
    }
    
    const currentTranslations = allTranslations[locale] || allTranslations['en'];
    const fallbackTranslations = allTranslations['en'];

    const keys = key.split('.');
    let result: any = currentTranslations;
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        // Fallback to English if translation not found in current locale
        result = fallbackTranslations;
        for (const k_fb of keys) {
            result = result?.[k_fb];
            if (result === undefined) return key; // Return key if not found in English either
        }
        break;
      }
    }
    
    if (typeof result === 'string' && options) {
      return Object.entries(options).reduce((acc, [optKey, optValue]) => {
        return acc.replace(`{{${optKey}}}`, String(optValue));
      }, result);
    }

    return typeof result === 'string' ? result : key;
  };
  
  // The Provider should always be rendered.
  // The `value` (especially the `t` function and `locale`) will behave correctly based on `isMounted`.
  return (
    <LocaleContext.Provider value={{ locale, setLocale, translations: allTranslations, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

export const useTranslation = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LocaleProvider');
  }
  return { t: context.t, locale: context.locale };
};
