
import React, { useState } from "react";
import styles from './ThemeSwitcher.module.css';

function ThemeSwitcher() {
  // State to track whether the theme is dark (true) or light (false)
  const [isDark, setIsDark] = useState(true);

  // Handler for the checkbox change event
  const toggleTheme = () => {
    setIsDark(!isDark); // Toggle the theme
  };

  // Conditional class for the theme background color
  const themeClass = isDark ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={`${styles.theme} ${themeClass}`}>
      <input
        type="checkbox"
        checked={!isDark}
        onChange={toggleTheme}
        className={styles.input}
      />
      <svg
        className={`${styles.icon} ${styles['icon-sun']}`}
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        style={{display: isDark ? 'none' : 'block'}}
      >
        <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" x2="12" y1="1" y2="3"></line>
          <line x1="12" x2="12" y1="21" y2="23"></line>
          <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
          <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
          <line x1="1" x2="3" y1="12" y2="12"></line>
          <line x1="21" x2="23" y1="12" y2="12"></line>
          <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
          <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
      </svg>
      <svg
        className={`${styles.icon} ${styles['icon-moon']}`}
        viewBox="0 0 24 24"
        style={{display: isDark ? 'block' : 'none'}}
      >
        <path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path>

      </svg>
    </div>
  );
}

export default ThemeSwitcher;