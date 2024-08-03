/**
 * Bootstrap Gamma Color Mode
 */

'use client';

import Check2 from 'bootstrap-icons/icons/check2.svg';
import CircleHalf from 'bootstrap-icons/icons/circle-half.svg';
import MoonFill from 'bootstrap-icons/icons/moon-fill.svg';
import SunFill from 'bootstrap-icons/icons/sun-fill.svg';

export default function BootstrapGammaColorMode() {
  return (
    <div className='dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle'>
      {/* Toggle */}
      <button
        id='bd-theme'
        className='btn dropdown-toggle py-2 d-flex align-items-center'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
        aria-label='Toggle Mode (Auto)'
      >
        <CircleHalf className='bi theme-icon-active my-1' width={16} />
        <span id='bd-theme-text' className='visually-hidden'>Toggle Theme</span>
      </button>
      {/* Mode */}
      <ul className='dropdown-menu dropdown-menu-end shadow' aria-labelledby='bd-theme-text'>
        <li>
          <button className='dropdown-item d-flex align-items-center' type='button' data-bs-theme-value='light' aria-pressed='false'>
            <SunFill className='bi me-2' width={16} />
            Light
            <Check2 className='bi ms-auto d-none' width={16} />
          </button>
        </li>
        <li>
          <button className='dropdown-item d-flex align-items-center' type='button' data-bs-theme-value='dark' aria-pressed='false'>
            <MoonFill className='bi me-2' width={16} />
            Dark
            <Check2 className='bi ms-auto d-none' width={16} />
          </button>
        </li>
        <li>
          <button className='dropdown-item d-flex align-items-center' type='button' data-bs-theme-value='auto' aria-pressed='true'>
            <CircleHalf className='bi me-2' width={16} />
            Auto
            <Check2 className='bi ms-auto d-none' width={16} />
          </button>
        </li>
      </ul>
    </div>
  );
};
