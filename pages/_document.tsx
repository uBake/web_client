import Document, { DocumentContext } from 'next/document';
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
}
export default MyDocument;
