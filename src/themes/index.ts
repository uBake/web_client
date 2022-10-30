import { darkTheme } from './dark';
import { lightTheme } from './light';

export enum ThemeModes {
  light = 'light',
  dark = 'dark'
}

export const themes = {
  [ThemeModes.light]: lightTheme,
  [ThemeModes.dark]: darkTheme
};
