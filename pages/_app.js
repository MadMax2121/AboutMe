import App from 'next/app';
import React from 'react';

class MyApp extends App {
  // This function runs only on the client, immediately after initial rendering.
  // It ensures that your theme setting is applied before your app is interactive.
  componentDidMount() {
    this.applyTheme();
  }

  // This function can be used to apply the theme from localStorage, if it exists.
  applyTheme = () => {
    // Check for the theme in localStorage
    const theme = localStorage.getItem('color-theme');

    // If there's a theme set in localStorage, use it
    if (theme) {
      document.body.className = theme; // This assumes you change themes by changing the class on the body
    } else {
      // If not, set a default theme and store it in localStorage for the next time
      const defaultTheme = 'light'; // Replace with your default theme if different
      document.body.className = defaultTheme;
      localStorage.setItem('color-theme', defaultTheme);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
