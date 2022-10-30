import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'react-jss';

import { themes } from '.';
import { getThemeMode } from '../../store/slices/themeSlice';
import { useSelector } from '../../store/store';

export const MyThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const currTheme = useSelector(getThemeMode);
  const theme = themes[currTheme];

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
