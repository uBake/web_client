import { ThemeProvider } from '@mui/material';
import { ThemeProviderProps } from '@mui/system';

import { getThemeMode } from '../../redux/slices/themeSlice';
import { useSelector } from '../../redux/store';
import { themes } from './theme';

export const MyThemeProvider = ({ children }: Partial<ThemeProviderProps>) => {
  const currTheme = useSelector(getThemeMode);
  const theme = themes[currTheme];

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
