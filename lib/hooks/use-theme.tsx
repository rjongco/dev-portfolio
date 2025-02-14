'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const initialState = {
  isDarkMode: false,
  toggle: () => {
    return;
  },
  enableDarkMode: (_: boolean) => {
    return;
  },
  disableDarkMode: (_: boolean) => {
    return;
  },
};

const ThemeContext = createContext(initialState);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use system preference as default theme
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check system preference for dark mode using matchMedia
    if (typeof window !== 'undefined') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const userPrefersDark = JSON.parse(localStorage.getItem('darkMode') || `${systemPrefersDark}`) ? true : false
      if(userPrefersDark === systemPrefersDark){
        localStorage.removeItem('darkMode')
        return systemPrefersDark
      } else {
        return userPrefersDark
      }
    }
    return false;
  });

  const toggle = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  const enableDarkMode = useCallback(() => {
    setIsDarkMode(true);
  }, []);

  const disableDarkMode = useCallback(() => {
    setIsDarkMode(false);
  }, []);

  useEffect(() => {
    // Apply the theme based on the isDarkMode state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Optionally, save the preference in localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggle,
        enableDarkMode,
        disableDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
