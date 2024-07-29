/**
 * Bootstrap Layout
 */

import { ReactNode } from 'react';

import { Viewport } from 'next';

// Context
import BootstrapProvider from '@/context/BootstrapContext';

// CSS
import './bootstrap.scss';

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
          {children}
        </BootstrapProvider>
      </body>
    </html>
  )
}
