import App from 'next/app';
import React from 'react';
import cookie from 'cookie'; // you may need to install the 'cookie' library

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let theme = 'light'; // default theme

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Check if there is a request (server-side)
    if (ctx.req) {
      // Get cookies from request
      const cookies = ctx.req.headers.cookie;
      if (cookies) {
        const parsedCookies = cookie.parse(cookies);
        theme = parsedCookies['color-theme'] || theme; // Use cookie value if it exists
      }
    } else {
      // We are client-side, persist the theme in cookies
      const cookies = document.cookie;
      const parsedCookies = cookie.parse(cookies);
      theme = parsedCookies['color-theme'] || theme; // Use cookie value if it exists
    }

    // Set the cookie with the theme if it's not present
    if (ctx.res && !ctx.req.headers.cookie?.includes('color-theme')) {
      ctx.res.setHeader('Set-Cookie', `color-theme=${theme}; path=/;`);
    }

    return { pageProps, theme };
  }

  render() {
    const { Component, pageProps } = this.props;
    // Pass down the theme from the props to your component
    return <Component {...pageProps} />;
  }
}

export default MyApp;
