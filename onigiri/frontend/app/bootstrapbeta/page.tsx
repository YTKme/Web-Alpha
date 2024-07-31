/**
 * Bootstrap Alpha Page
 */

import BootstrapBetaColorMode from '@/component/BootstrapBetaColorMode';
import type { Metadata } from 'next';


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
          <BootstrapBetaColorMode />
        </main>
      </div>
    </div>
  );
}
