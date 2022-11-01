import { withThemes } from '@react-theming/storybook-addon';
import React from 'react';
import { SheetsRegistry, ThemeProvider, jss } from 'react-jss';

import { ThemeModes, themes } from '../src/themes';
import { globalStyles } from '../src/themes/global';

const providerFn = ({ theme, children }) => {
  const sheets = new SheetsRegistry();

  const resetCss = jss.createStyleSheet(globalStyles);
  sheets.add(resetCss);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <style type="text/css" id="normalize">
        {sheets.toString()}
      </style>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

// const onThemeSwitch = context => {
//   const { theme } = context;
//   const background = theme.name === 'Dark' ? '#2c2f33' : 'white';
//   const parameters = {
//     backgrounds: {
//       default: background
//     },
//     color: 'white'

//     // Pass backgrounds: null to disable background switching at all
//   };
//   return {
//     parameters
//   };
// };

export const themeDecorator = withThemes(
  ThemeProvider,
  [themes[ThemeModes.light], themes[ThemeModes.dark]],
  {
    providerFn
    // onThemeSwitch
  }
);
