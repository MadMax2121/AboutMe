import '@/styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Check local storage for a theme or default to 'light'
    const theme = localStorage.getItem('color-theme') || 'light';

    // Apply the theme
    document.body.dataset.theme = theme;

    // Optional: Add a class to the body
     document.body.classList.add(theme);

  }, []);

  // Optional: Implement a function to toggle the theme that can be passed down to components
   const toggleTheme = () => {
     const newTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
     localStorage.setItem('color-theme', newTheme);
     document.body.dataset.theme = newTheme;
  
      document.body.classList.replace(document.body.dataset.theme, newTheme);
     };

  return <Component {...pageProps}  toggleTheme={toggleTheme}  />;
}
