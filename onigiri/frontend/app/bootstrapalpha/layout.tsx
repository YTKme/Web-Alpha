/**
 * Bootstrap Alpha Layout
 */

import { ReactNode } from 'react';

import { Viewport } from 'next';

// Context
import { BootstrapAlphaColorModeProvider } from '@/context/BootstrapAlphaColorModeContext';
import BootstrapAlphaProvider from '@/context/BootstrapAlphaContext';

// CSS
import './bootstrapalpha.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function BootstrapLayout({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <html lang='en' data-bs-theme='auto'>
      <body>
        <BootstrapAlphaProvider>
          <BootstrapAlphaColorModeProvider>
            {children}
          </BootstrapAlphaColorModeProvider>
        </BootstrapAlphaProvider>
      </body>
    </html>
  )
}
