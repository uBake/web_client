import { darkTheme } from './dark';
import { lightTheme } from './light';

export enum ThemeModes {
  light = 'Light',
  dark = 'Dark'
}

export const themes = {
  [ThemeModes.light]: lightTheme,
  [ThemeModes.dark]: darkTheme
};
