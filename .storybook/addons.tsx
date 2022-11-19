import { withThemes } from '@react-theming/storybook-addon';
import React from 'react';
import { ThemeProvider } from 'react-jss';

import { ThemeModes, themes } from '../src/themes';

const providerFn = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const themeDecorator = withThemes(
  ThemeProvider,
  [themes[ThemeModes.light], themes[ThemeModes.dark]],
  {
    providerFn
    // onThemeSwitch
  }
);
