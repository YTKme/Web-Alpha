/*
 * Bootstrap Color Mode Delta
 */

(() => {
    'use strict';

    const getStoredColorMode = () => localStorage.getItem('color-mode');

    const getPreferredColorMode = () => {
      const storedColorMode = getStoredColorMode()
      if (storedColorMode) {
        return storedColorMode;
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setColorMode = colorMode => {
      if (colorMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-bs-theme', colorMode)
      }
    }

    setColorMode(getPreferredColorMode())
})();
