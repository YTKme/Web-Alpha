/**
 * Bootstrap Alpha Page
 */

import type { Metadata } from 'next';

import BootstrapAlphaColorMode from '@/component/BootstrapAlphaColorMode';

export const metadata: Metadata = {
  title: '🍙 Onigiri 🍙 Bootstrap 🍙',
  description: '🍙 Onigiri 🍙 Bootstrap 🍙',
}

export default function Page() {
  return (
    <div className='d-flex w-100 h-100'>
      <div className='w-100'>
        <header>
          <h1>Bootstrap</h1>
        </header>
        <main className='text-center'>
          <BootstrapAlphaColorMode />
        </main>
      </div>
    </div>
  );
}
