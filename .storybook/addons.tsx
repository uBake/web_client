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
		<link rel='preconnect' href='https://fonts.googleapis.com' />
		<link rel='preconnect' href='https://fonts.gstatic.com' />
		<link
			href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap'
			rel='stylesheet'
		></link>
		<style type='text/css' id='normalize'>
			{sheets.toString()}
		</style>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};


export const themeDecorator = withThemes(ThemeProvider, [themes[ThemeModes.dark], themes[ThemeModes.light]], {
  providerFn
  // onThemeSwitch
});
