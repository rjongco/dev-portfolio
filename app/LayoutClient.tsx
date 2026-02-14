'use client';
import { ReactNode } from 'react';
import { Chatbot } from '@/components';
import ThemeProvider from '@/lib/hooks/use-theme';

interface LayoutClientProps {
  children: ReactNode;
}

export function LayoutClient({ children }: LayoutClientProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
