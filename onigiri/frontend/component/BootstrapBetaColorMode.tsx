/**
 * Bootstrap Alpha Color Mode
 */

'use client';

import CircleHalf from 'bootstrap-icons/icons/circle-half.svg';

import { useTheme } from '@/context/BootstrapBetaColorModeContext';

export default function BootstrapBetaColorMode() {
  // Use Context
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current Theme:</p>
      <button
        type="button"
        className="btn btn-light m-1"
        onClick={() => setTheme('light')}
        disabled={theme === 'light'}
      >
        Light
      </button>
      <button
        type="button"
        className="btn btn-dark m-1"
        onClick={() => setTheme('dark')}
        disabled={theme === 'dark'}
      >
        Dark
      </button>
      <button
        type="button"
        className="btn btn-secondary m-1"
        onClick={() => setTheme('auto')}
        disabled={theme === 'auto'}
      >
        System
      </button>

      <div>
        <CircleHalf width='2em' />
        <CircleHalf width={16} height={16} />
        <CircleHalf width={32} height={32} />
      </div>

      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="true">
          Default dropdown
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
          <li><a className="dropdown-item active" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  );
}
