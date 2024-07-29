/**
 * Bootstrap Alpha Layout
 */

import { ReactNode } from 'react';

import { Viewport } from 'next';

// Context
import { BootstrapColorModeSimpleProvider } from '@/context/BootstrapColorModeSimpleContext';
import BootstrapProvider from '@/context/BootstrapContext';

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
        <BootstrapProvider>
          <BootstrapColorModeSimpleProvider>
          {children}
          </BootstrapColorModeSimpleProvider>
        </BootstrapProvider>
      </body>
    </html>
  )
}
