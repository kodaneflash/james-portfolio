// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Favicon */}
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          {/* Open Graph Protocol */}
          <meta property="og:title" content="My Developer Portfolio" />
          <meta property="og:description" content="Showcase of my Projects" />
          <meta property="og:image" content="URL_to_image" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.jamesarcher.io/" />
          {/* Add more meta tags as needed */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
