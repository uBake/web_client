import { Manrope } from '@next/font/google';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { MyThemeProvider } from '../src/themes/ThemeProvider';
import { store } from '../store/store';

import type { AppProps } from 'next/app';
const font = Manrope({ weight: ['400', '500', '700'] });

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const style = document.getElementById('server-side-styles');
    if (style && style.parentNode) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <main className={font.className}>
      <Provider store={store}>
        <MyThemeProvider>
          <Component {...pageProps} />
        </MyThemeProvider>
      </Provider>
    </main>
  );
};

export default App;
