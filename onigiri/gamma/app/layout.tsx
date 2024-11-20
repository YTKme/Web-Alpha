/**
 * Root Layout
 */

import { Metadata, Viewport } from 'next';

// CSS
import '@/style/global.scss';
import './global.css';

export const metadata: Metadata = {
  title: {
    template: '%s 🍙 Onigiri 🍙',
    default: '🍙 Onigiri 🍙',
  },
  description: '🍙 Onigiri 🍙',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
