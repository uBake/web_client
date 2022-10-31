import { withThemes } from '@react-theming/storybook-addon';
import React from 'react';
import { SheetsRegistry, ThemeProvider, jss } from 'react-jss';

import { ThemeModes, themes } from '../src/themes';
import { global } from '../src/themes/global';

const providerFn = ({ theme, children }) => {
  const sheets = new SheetsRegistry();

  const resetCss = jss.createStyleSheet(global);
  sheets.add(resetCss);

  return (
    <>
      <style type="text/css" id="normalize">
        {sheets.toString()}
      </style>
      <style type="text/css" id="more">{`* {box-sizing: border-box;}`}</style>
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
