import { Theme as Base } from '@mui/material';

import { darkTheme } from './dark';
import { lightTheme } from './light';

export enum ThemeModes {
  light = 'light',
  dark = 'dark'
}

export interface Theme extends Base {}

export const themes = {
  [ThemeModes.light]: lightTheme,
  [ThemeModes.dark]: darkTheme
};
