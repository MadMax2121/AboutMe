// components/ThemeSwitcher/ThemeSwitcher.tsx
import React from 'react';
import styles from './ThemeSwitcher.module.css';

function ThemeSwitcher() {
  const toggleTheme = () => {
    const currentTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('color-theme', currentTheme);
    document.body.dataset.theme = currentTheme;
  };

  return (
    <button onClick={toggleTheme} className={styles.theme}>
      Toggle Theme
    </button>
  );
}

export default ThemeSwitcher;