import { Shadows } from './themes/shadows';
import { ZIndex } from './themes/zIndex';


export interface Theme {
  palette: Palette;
  shadows: Shadows;
  // typography: Typography;
  zIndex: ZIndex;
  borderRadius: BorderRadius;
}

declare module 'react-jss' {
  namespace Jss {
    export interface Theme {
      palette: Palette;
      shadows: Shadows;
      // typography: Typography;
      zIndex: ZIndex;
      borderRadius: BorderRadius;
    }
  }
}

export interface BorderRadius {
  full: number;
  extraLarge: number;
  large: number;
  medium: number;
  small: number;
  extraSmall: number;
  flat: number;
}

export interface ZIndex {
  mobileStepper: number;
  speedDial: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
  fab: number;
}

export interface Palette {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
}

export interface Colors {
  primary: typeof primary;
  secondary: typeof secondary;
  tertiary: typeof tertiary;
  error: typeof error;
  neutral: typeof neutral;
  neutralVariant: typeof neutralVariant;
}