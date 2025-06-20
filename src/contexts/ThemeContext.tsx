"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  // toggleTheme: () => void; // Example for later
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('light'); // Default, will be quickly updated

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemPrefersDark = mediaQuery.matches;

    let initialTheme: Theme;
    if (storedTheme) {
      initialTheme = storedTheme;
    } else {
      initialTheme = systemPrefersDark ? 'dark' : 'light';
    }
    
    // Update React state and ensure <html> class matches
    // The inline script handles the very first paint, this syncs React & handles listeners
    setThemeState(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if no theme is explicitly set in localStorage (i.e., following system)
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        setThemeState(newSystemTheme);
        if (newSystemTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, newTheme); // User explicitly sets theme
    setThemeState(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
