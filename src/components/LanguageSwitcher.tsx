"use client";

import { useLocale, useTranslation } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t('navbar.language')}>
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLocale('es')}
          disabled={locale === 'es'}
          aria-current={locale === 'es' ? 'page' : undefined}
        >
          {t('navbar.spanish')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLocale('en')}
          disabled={locale === 'en'}
          aria-current={locale === 'en' ? 'page' : undefined}
        >
          {t('navbar.english')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
