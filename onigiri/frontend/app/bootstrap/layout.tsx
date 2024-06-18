/**
 * Bootstrap Layout
 */

import { Viewport } from 'next'

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
  children: React.ReactNode,
}) {
  return (
    <html lang='en' data-bs-theme='light'>
    <body>
      {children}
    </body>
    </html>
  )
}
