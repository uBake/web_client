import Document, { DocumentContext } from 'next/document';
import { createGenerateId, JssProvider, SheetsRegistry } from 'react-jss';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry();
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
      ),
      head: [
        ...(initialProps.head as JSX.Element[]).filter(
          item => item.props.name !== 'viewport'
        ),
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      ]
    };
  }
}
export default MyDocument;
