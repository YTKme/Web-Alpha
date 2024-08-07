/*
 * Bootstrap Gamma Color Mode
 */

(() => {
  'use strict';

  const LOCAL_STORAGE_MODE_NAME = 'mode-gamma';
  const DATA_MODE_NAME = 'data-bs-theme';
  const DATA_MODE_VALUE_NAME = 'data-bs-theme-value';

  const getStoredMode = () => localStorage.getItem(LOCAL_STORAGE_MODE_NAME);
  const setStoredMode = mode => localStorage.setItem(LOCAL_STORAGE_MODE_NAME, mode);

  const getPreferredMode = () => {
    const storedMode = getStoredMode();
    if (storedMode) {
      return storedMode;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setMode = mode => {
    if (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute(DATA_MODE_NAME, 'dark');
    } else {
      document.documentElement.setAttribute(DATA_MODE_NAME, mode);
    }
  };

  setMode(getPreferredMode());

  const showActiveMode = (mode, focus = false) => {
    const modeSwitcher = document.querySelector('#bd-theme');

    if (!modeSwitcher) { return; }

    const modeSwitcherText = document.querySelector('#bd-them-text');
    const activeModeIcon = document.querySelector('.theme-icon-active');
    const buttonToActive = document.querySelector(`[${DATA_MODE_VALUE_NAME}="${mode}"]`);
    console.debug('Button to Active:', buttonToActive);
    const svgActiveButton = buttonToActive.querySelector('path');
    console.debug('SVG Active Button:', svgActiveButton);

    document.querySelectorAll(`[${DATA_MODE_VALUE_NAME}]`).forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    buttonToActive.classList.add('active');
    buttonToActive.setAttribute('aria-pressed', 'true');

    if (focus) { modeSwitcher.focus(); }
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedMode = getStoredMode()
    if (storedMode !== 'light' && storedMode !== 'dark') {
      setMode(getPreferredMode())
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    // showActiveMode(getPreferredMode())

    document.querySelectorAll(`[${DATA_MODE_VALUE_NAME}]`)
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const mode = toggle.getAttribute(`[${DATA_MODE_VALUE_NAME}]`)
          console.debug('Mode:', mode)
          // setStoredMode(mode)
          // setMode(mode)
          // showActiveMode(mode, true)
        });
      });
  });
})();
