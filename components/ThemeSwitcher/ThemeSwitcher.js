import React, { useState, useEffect } from "react";
import styles from './ThemeSwitcher.module.css';

function ThemeSwitcher() {
  // State to manage the theme based on localStorage or default to dark
  // Initialize theme state without assuming initial theme; this will be set after component mounts
  const [isDark, setIsDark] = useState(null);

  // Effect to set theme based on localStorage or default to dark after component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme ? savedTheme === "dark" : true; // Default to dark if not specified
    setIsDark(prefersDark);
  }, []);

  // Update localStorage and document class on theme change, but only after initial theme is set
  useEffect(() => {
    if (isDark !== null) { // Ensure this runs only after isDark has been initialized
      localStorage.setItem('theme', isDark ? "dark" : "light");
      document.body.dataset.theme = isDark ? "dark" : "light";
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Render nothing until isDark is initialized
  if (isDark === null) {
    return null;
  }

  return (
    <div className={`${styles.theme} ${isDark ? styles.darkTheme : styles.lightTheme}`}>
      <input
        type="checkbox"
        checked={!isDark}
        onChange={toggleTheme}
        className={styles.input}
      />
      {isDark ? (
        <svg
          className={`${styles.icon} ${styles['icon-moon']}`}
          viewBox="0 0 24 24"
          style={{ fill: 'var(--main-color)' }}
        >
          
          <path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path>
        </svg>
      ) : (
        <svg
          className={`${styles.icon} ${styles['icon-sun']}`}
          width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="icon icon-sun"><circle r="5" cy="12" cx="12"></circle><line y2="3" y1="1" x2="12" x1="12"></line><line y2="23" y1="21" x2="12" x1="12"></line><line y2="5.64" y1="4.22" x2="5.64" x1="4.22"></line><line y2="19.78" y1="18.36" x2="19.78" x1="18.36"></line><line y2="12" y1="12" x2="3" x1="1"></line><line y2="12" y1="12" x2="23" x1="21"></line><line y2="18.36" y1="19.78" x2="5.64" x1="4.22"></line><line y2="4.22" y1="5.64" x2="19.78" x1="18.36"></line></svg>
      )}
    </div>
  );
}

export default ThemeSwitcher;
