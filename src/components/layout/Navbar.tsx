
"use client";

import Link from 'next/link';
import { useTranslation } from '@/contexts/LocaleContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Layers, Workflow } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';

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

  interface NavLink {
    href: string;
    label: string;
    icon: React.FC<LucideProps>;
  }

  const navLinks: NavLink[] = [
    { href: '#features', label: t('navbar.features'), icon: Layers },
    { href: '#how-it-works', label: t('navbar.howItWorks'), icon: Workflow },
  ];

  if (!isMounted) {
    // Render a basic structure or null to avoid content flash/layout shift during SSR vs client hydration
    // For a navbar, it might be better to render a minimal version or a placeholder of similar height
    return (
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary" aria-label={t('appName')}>
            <div className="h-7 w-7" />
            <span className="font-headline">{t('appName')}</span>
          </Link>
          <div className="flex items-center gap-2">
            {/* Placeholder for switchers to maintain layout */}
            <div className="h-10 w-10 md:w-auto"></div> 
            <div className="h-10 w-10 md:w-auto"></div>
            <div className="md:hidden h-10 w-10"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 leading-[31px] ${isScrolled ? 'bg-background/80 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary" aria-label={t('appName')}>
          <Image src="/hero/logo-blue.png" alt={t('appName')} width={28} height={28} />
          <span className="font-headline">{t('appName')}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-[22px] font-bold text-foreground hover:text-primary transition-colors">
                <Icon className="h-6 w-6" />
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3"> {/* Increased gap slightly for better spacing */}
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/demo">{t('navbar.cta')}</Link>
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
                  <Image src="/hero/logo-blue.png" alt={t('appName')} width={28} height={28} />
                  <span className="font-headline">{t('appName')}</span>
                </Link>
                  {navLinks.map((link) => {
                     const Icon = link.icon;
                    return (
                      <Link key={link.href} href={link.href} className="flex items-center gap-2 text-[22px] font-bold text-foreground hover:text-primary transition-colors">
                         <Icon className="h-6 w-6" />
                        {link.label}
                      </Link>
                    )
                  })}
                  <Button asChild className="w-full">
                    <Link href="/demo">{t('navbar.cta')}</Link>
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
