import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import { MyThemeProvider } from '../src/themes/ThemeProvider';
import createEmotionCache from '../ui/utils/createEmotionCache';
import '../ui/utils/globalStyles';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: MyAppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <MyThemeProvider>
            <Component {...pageProps} />
          </MyThemeProvider>
        </CacheProvider>
      </Provider>
    </>
  );
}

export default MyApp;
