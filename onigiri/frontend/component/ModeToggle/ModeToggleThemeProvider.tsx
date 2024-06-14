/**
 * Mode Toggle Theme Provider
 */

'use client';

import { useTheme } from "@/context/ThemeContext";

export function ModeToggleThemeProvider() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme('light')} disabled={theme === 'light'}>Light</button>
      <button onClick={() => setTheme('dark')} disabled={theme === 'dark'}>Dark</button>
      <button onClick={() => setTheme('system')} disabled={theme === 'system'}>System</button>
    </div>
  );
};
