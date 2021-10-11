import Document, { Html, Head, Main, NextScript } from 'next/document';
import { resetId } from 'react-id-generator';
import { library } from '@fortawesome/fontawesome-svg-core';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Reset id's across the application
    resetId();

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="font-sans text-base">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
