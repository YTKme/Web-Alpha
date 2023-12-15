/**
 * Mode Toggle Bootstrap
 */

'use client';

import BootstrapIcon from 'bootstrap-icons/bootstrap-icons.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './color-modes.js';
import './ModeToggleBootstrap.css';

export default function ModeToggleBootstrap() {
  return (
    <>
      <div className='dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle'>
        {/* Toggle */}
        <button
          id='toggle'
          className='btn dropdown-toggle py-2 d-flex align-items-center'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          aria-label='Toggle Mode (Auto)'
        >
          <svg className='bi' width='1em' height='1em' fill='currentColor'>
            <use href={`${BootstrapIcon}#circle-half`} />
          </svg>
          <span className='visually-hidden'>Toggle Theme</span>
        </button>
        {/* Mode */}
        <ul id='mode' className='dropdown-menu shadow'>
          <li>
            <button className='dropdown-item d-flex align-items-center' data-bs-theme-value='light' type='button'>
              <svg className='bi me-2' width='1em' height='1em' fill='currentColor'>
                <use href={`${BootstrapIcon}#sun-fill`} />
              </svg>
              Light
              <svg className='bi ms-auto d-none' width='1em' height='1em' fill='currentColor'>
                <use href={`${BootstrapIcon}#check2`} />
              </svg>
            </button>
          </li>
          <li>
            <button className='dropdown-item d-flex align-items-center' data-bs-theme-value='dark' type='button'>
              <svg className='bi me-2' width='1em' height='1em' fill='currentColor'>
                <use href={`${BootstrapIcon}#moon-fill`} />
              </svg>
              Dark
              <svg className='bi ms-auto d-none' width='1em' height='1em' fill='currentColor'>
                <use href={`${BootstrapIcon}#check2`} />
              </svg>
            </button>
          </li>
          <li>
            <button className='dropdown-item d-flex align-items-center' data-bs-theme-value='auto' type='button'>
              <svg className='bi me-2' width='1em' height='1em' fill='currentColor'>
                <use href={`${BootstrapIcon}#circle-half`} />
              </svg>
              Auto
              <svg className='bi ms-auto d-none' width='1em' height='1em' fill='currentColor'>
                <use href={`${BootstrapIcon}#check2`} />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
