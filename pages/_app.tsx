import { AppProps } from 'next/app';
import Head from 'next/head';
import normalize from 'normalize-jss';
import { SheetsRegistry, jss } from 'react-jss';
import { Provider } from 'react-redux';



import { MyThemeProvider } from '../src/themes/ThemeProvider';
import { store } from '../store/store';


function MyApp({ Component, pageProps }: AppProps) {
  const sheets = new SheetsRegistry();
  const normalizeCss = jss.createStyleSheet(normalize);
  sheets.add(normalizeCss);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <style type="text/css">{sheets.toString()}</style>
      </Head>
      <Provider store={store}>
        <MyThemeProvider>
          <Component {...pageProps} />
        </MyThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;