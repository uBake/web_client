import { Provider } from 'react-redux';

import { MyThemeProvider } from '../src/themes/ThemeProvider';
import { store } from '../store/store';

import type { AppProps } from 'next/app';
const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <MyThemeProvider>
      <Component {...pageProps} />
    </MyThemeProvider>
  </Provider>
);

export default App;
