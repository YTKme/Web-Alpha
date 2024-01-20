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
          id='bd-theme'
          className='btn dropdown-toggle py-2 d-flex align-items-center'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          aria-label='Toggle Mode (Auto)'
        >
          <svg className='bi theme-icon-active my-1' width='1em' height='1em' fill='currentColor'>
            <use href={`${BootstrapIcon}#circle-half`} />
          </svg>
          <span id='bd-theme-text' className='visually-hidden'>Toggle Theme</span>
        </button>
        {/* Mode */}
        <ul className='dropdown-menu dropdown-menu-end shadow' aria-labelledby='bd-theme-text'>
          <li>
            <button className='dropdown-item d-flex align-items-center' type='button' data-bs-theme-value='light' aria-pressed='false'>
              <svg className='bi theme-icon me-2' width='1em' height='1em'>
                <use href={`${BootstrapIcon}#sun-fill`}></use>
              </svg>
              Light
              <svg className='bi ms-auto d-none' width='1em' height='1em'>
                <use href={`${BootstrapIcon}#check2`}></use>
              </svg>
            </button>
          </li>
          <li>
            <button className='dropdown-item d-flex align-items-center' type='button' data-bs-theme-value='dark' aria-pressed='false'>
              <svg className='bi theme-icon me-2' width='1em' height='1em'>
                <use href={`${BootstrapIcon}#moon-fill`}></use>
              </svg>
              Dark
              <svg className='bi ms-auto d-none' width='1em' height='1em'>
                <use href={`${BootstrapIcon}#check2`}></use>
              </svg>
            </button>
          </li>
          <li>
            <button className='dropdown-item d-flex align-items-center active' type='button' data-bs-theme-value='auto' aria-pressed='true'>
              <svg className='bi theme-icon me-2' width='1em' height='1em'>
                <use href={`${BootstrapIcon}#circle-half`}></use>
              </svg>
              Auto
              <svg className='bi ms-auto d-none' width='1em' height='1em'>
                <use href={`${BootstrapIcon}#check2`}></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
