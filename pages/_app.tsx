
// pages/_app.tsx
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem('color-theme') || 'light';
    document.body.dataset.theme = theme;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
