import { createSlice } from '@reduxjs/toolkit';

import { ThemeModes } from '../../src/themes/theme';
import { RootState } from '../store';

export interface AppState {
  theme: ThemeModes;
}

const initialState: AppState = {
  theme: ThemeModes.light
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleThemeMode: (state: AppState): void => {
      state.theme =
        ThemeModes[state.theme === ThemeModes.dark ? 'light' : 'dark'];
    }
  }
});

export const getThemeMode = (state: RootState): ThemeModes => state.app.theme;

export const { toggleThemeMode } = appSlice.actions;
