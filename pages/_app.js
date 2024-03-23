import App from 'next/app';
import React from 'react';

class MyApp extends App {
  componentDidMount() {
    // Once the app is mounted on the client, read the theme from localStorage
    const theme = localStorage.getItem('color-theme') || 'light';
    // Apply the theme as needed, for example by setting a class on the body
    document.body.className = theme;
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
