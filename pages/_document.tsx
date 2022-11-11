import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { createGenerateId, jss, JssProvider, SheetsRegistry } from 'react-jss';

import { globalStyles } from '../src/themes/global';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry();
    registry.add(jss.createStyleSheet(globalStyles));
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          (
            <JssProvider registry={registry} generateId={generateId}>
              <App {...props} />
            </JssProvider>
          )
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id='server-side-styles'>{registry.toString()}</style>
        </>
      )
    };
  }
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="icon" href="link to favicon" /> */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap'
            rel='stylesheet'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
            rel='stylesheet'
          />
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
