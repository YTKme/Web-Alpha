/**
 * Bootstrap Alpha Layout
 */

'use client';

import { ReactNode, useEffect } from 'react';

import { Viewport } from 'next';

// Context
import { ThemeProvider, getInitialTheme } from '@/context/BootstrapBetaColorModeContext';
import BootstrapBetaProvider from '@/context/BootstrapBetaContext';

// CSS
import './bootstrapbeta.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

function setInitialTheme() {
  const initialTheme = getInitialTheme();
  document.documentElement.setAttribute('data-bs-theme', initialTheme);
}

export default function BootstrapLayout({
  children,
}: {
  children: ReactNode,
}) {
  useEffect(() => {
    setInitialTheme();
  }, []);

  return (
    <html lang='en'>
      <body>
        <BootstrapBetaProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </BootstrapBetaProvider>
      </body>
    </html>
  )
}
