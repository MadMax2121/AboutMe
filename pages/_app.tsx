
// pages/_app.tsx
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light'; // Default to 'light'
    document.body.dataset.theme = currentTheme;

    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
