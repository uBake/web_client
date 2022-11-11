import { createSlice } from '@reduxjs/toolkit';

import { ThemeModes } from '../../src/themes';
import { RootState } from '../store';

export interface AppState {
  themeMode: ThemeModes;
}

const initialState: AppState = {
  themeMode: ThemeModes.light
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleThemeMode: (state: AppState): void => {
      state.themeMode =
        ThemeModes[state.themeMode === ThemeModes.dark ? 'light' : 'dark'];
    }
  }
});

export const getThemeMode = (state: RootState): ThemeModes =>
  state.app.themeMode;

export const { toggleThemeMode } = appSlice.actions;
