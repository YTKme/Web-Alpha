/**
 * Root Layout
 */

import { Viewport } from 'next'

// CSS
import '@/style/global.scss';
import './global.css';
import { ModeToggleBootstrap } from '@/component/ModeToggle/ModeToggleBootstrap';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-bs-theme='auto'>
      <head>
        <script src='/res/js/color-modes.js' />
      </head>
      <body>
        <ModeToggleBootstrap />
        {children}
      </body>
    </html>
  )
}
