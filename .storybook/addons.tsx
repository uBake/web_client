import { withThemes } from '@react-theming/storybook-addon';
import normalize from 'normalize-jss';
import React from 'react';
import { SheetsRegistry, ThemeProvider, jss } from 'react-jss';

import { ThemeModes, themes } from '../src/themes';

const providerFn = ({ theme, children }) => {
  const sheets = new SheetsRegistry();
  const normalizeCss = jss.createStyleSheet(normalize);
  sheets.add(normalizeCss);

  return (
    <>
      <style>{sheets.toString()}</style>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
export const onThemeSwitch = context => {
  const { theme } = context;
  const background = theme.name === 'Dark theme' ? '#2c2f33' : 'white';
  const parameters = {
    backgrounds: {
      default: background
    }
    // Pass backgrounds: null to disable background switching at all
  };
  return {
    parameters
  };
};

export const themeDecorator = withThemes(
  ThemeProvider,
  [themes[ThemeModes.light], themes[ThemeModes.dark]],
  {
    providerFn,
    onThemeSwitch
  }
);
