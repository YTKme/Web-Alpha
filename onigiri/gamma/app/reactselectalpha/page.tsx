/**
 * React Select Alpha Page
 */

import type { Metadata } from 'next';

// Component
import ReactSelectFormAlpha from '@/component/ReactSelectFormAlpha';
import ReactSelectTextAlpha from '@/component/ReactSelectTextAlpha';

export const metadata: Metadata = {
  title: '🍙 Onigiri 🍙 React Select 🍙 Alpha 🍙',
  description: '🍙 Onigiri 🍙 React Select 🍙 Alpha 🍙',
}

export default function Page() {
  return (
    <div className='d-flex w-100 h-100'>
      <div className='w-100'>
        <header>
          <h1>React Select Alpha</h1>
        </header>
        <main className='text-center'>
          <p>React Select Alpha</p>
          <ReactSelectFormAlpha />
          <ReactSelectTextAlpha />
        </main>
      </div>
    </div>
  );
}
