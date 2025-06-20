
"use client";

import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // To prevent hydration mismatch, ensure the switch is only rendered client-side
  // after the theme state from context is reliably available.
  if (!mounted) {
    // You can return a placeholder or null. A div with fixed size helps prevent layout shifts.
    return <div className="h-6 w-[50px]" />; // Approx size of the switch with icons
  }

  const handleThemeChange = (isDark: boolean) => {
    setTheme(isDark ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-2" role="group" aria-label="Theme selector">
      <Sun className={`h-5 w-5 text-foreground/70 transition-opacity ${theme === 'light' ? 'opacity-100' : 'opacity-50'}`} aria-hidden="true" />
      <Switch
        id="theme-switcher"
        checked={theme === 'dark'}
        onCheckedChange={handleThemeChange}
        aria-label={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}
      />
      <Moon className={`h-5 w-5 text-foreground/70 transition-opacity ${theme === 'dark' ? 'opacity-100' : 'opacity-50'}`} aria-hidden="true" />
    </div>
  );
};

export default ThemeSwitcher;
