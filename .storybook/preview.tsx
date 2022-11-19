import '../styles/global.css';

import { themes } from '../src/themes';
import { themeDecorator } from './addons';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  themes,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [themeDecorator];
