"use client";

import Link from 'next/link';
import { useTranslation } from '@/contexts/LocaleContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: t('navbar.features') },
    { href: '#how-it-works', label: t('navbar.howItWorks') },
    { href: '#testimonials', label: t('navbar.testimonials') },
  ];

  if (!isMounted) {
    return null; // Avoid rendering mismatch during hydration
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary" aria-label={t('appName')}>
          <Rocket className="h-7 w-7" />
          <span className="font-headline">{t('appName')}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button asChild className="hidden md:inline-flex">
            <Link href="#cta">{t('navbar.cta')}</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4" aria-label={t('appName')}>
                  <Rocket className="h-7 w-7" />
                  <span className="font-headline">{t('appName')}</span>
                </Link>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="w-full">
                    <Link href="#cta">{t('navbar.cta')}</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
