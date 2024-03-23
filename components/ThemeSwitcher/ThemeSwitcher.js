// components/ThemeSwitcher/ThemeSwitcher.tsx
import React from 'react';
import styles from './ThemeSwitcher.module.css';

function ThemeSwitcher() {
  const toggleTheme = () => {
    // Assuming "light" and "dark" are the values used for theme toggling
    const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    
    localStorage.setItem('theme', currentTheme); // Update the correct localStorage key
    document.body.dataset.theme = currentTheme; // Optionally, use this for CSS selectors

    // If you're using Tailwind's `class` mode for dark mode, toggle the class on <html> or <body>
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button onClick={toggleTheme} className={styles.theme}>
      Toggle Theme
    </button>
  );
}

export default ThemeSwitcher;