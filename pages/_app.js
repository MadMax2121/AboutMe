import App from 'next/app';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    // Your dark mode logic
    const currentTheme = ctx.req.headers.cookie?.includes('color-theme=dark') ? 'dark' : 'light';
    ctx.res.setHeader('Set-Cookie', `color-theme=${currentTheme}`);

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;