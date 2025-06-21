"use client";

import Link from 'next/link';
import { useTranslation } from '@/contexts/LocaleContext';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PrivacyPolicyContent from '@/components/legal/PrivacyPolicyContent';
import TermsOfServiceContent from '@/components/legal/TermsOfServiceContent';

const Footer = () => {
  const { t } = useTranslation();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  if (!isMounted) {
    // Render a minimal placeholder or null to prevent flash of unstyled content or errors during SSR
    return (
      <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-sm text-secondary-foreground/70">
            <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    );
  }

  const footerLinks = {
    quickLinks: [
      { href: '#features', label: t('navbar.features') },
      { href: '#how-it-works', label: t('navbar.howItWorks') },
      { href: '#cta', label: t('navbar.cta') },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4" aria-label={t('appName')}>
              <Rocket className="h-7 w-7" />
              <span className="font-headline">{t('appName')}</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-headline">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-headline">{t('footer.contactUs')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${t('footer.email')}`} className="hover:text-primary transition-colors">{t('footer.email')}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>{t('footer.phone')}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>{t('footer.address')}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-headline">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-sm hover:text-primary transition-colors text-left w-full">{t('footer.privacyPolicy')}</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl md:max-w-3xl max-h-[85vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle className="text-2xl mb-2">{t('footer.privacyPolicy')}</DialogTitle>
                    </DialogHeader>
                    <div className="overflow-y-auto py-2 pr-2 flex-grow">
                      <PrivacyPolicyContent />
                    </div>
                    <DialogFooter className="mt-auto pt-4">
                      <DialogClose asChild>
                        <Button type="button" variant="outline">Close</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-sm hover:text-primary transition-colors text-left w-full">{t('footer.termsOfService')}</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl md:max-w-3xl max-h-[85vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle className="text-2xl mb-2">{t('footer.termsOfService')}</DialogTitle>
                    </DialogHeader>
                    <div className="overflow-y-auto py-2 pr-2 flex-grow">
                      <TermsOfServiceContent />
                    </div>
                    <DialogFooter className="mt-auto pt-4">
                      <DialogClose asChild>
                        <Button type="button" variant="outline">Close</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-secondary-foreground/70">
          <p>{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
