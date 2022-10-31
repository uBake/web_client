import { colors } from './themes/colors';
import { Shadows } from './themes/shadows';
import { ZIndex } from './themes/zIndex';

export interface Theme {
  name: 'Dark' | 'Light';
  palette: Palette;
  shadows: Shadows;
  // typography: Typography;
  zIndex: ZIndex;
  borderRadius: BorderRadius;
  border: Border;
  aspectRatio: AspectRatio;
}

declare module 'react-jss' {
  namespace Jss {
    export interface Theme {
      palette: Palette;
      shadows: Shadows;
      // typography: Typography;
      zIndex: ZIndex;
      borderRadius: BorderRadius;
      border: Border;
      aspectRatio: AspectRatio;
    }
  }
}

export interface AspectRatio {
  '1/1': number;
  '5/4': number;
  '4/3': number;
  '16/9': number;
}

export interface Border {
  outline: string;
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
  surface1: string;
  surface2: string;
  surface3: string;
  surface4: string;
  surface5: string;
}

export interface Colors {
  primary: typeof colors.primary;
  secondary: typeof colors.secondary;
  tertiary: typeof colors.tertiary;
  error: typeof colors.error;
  neutral: typeof colors.neutral;
  neutralVariant: typeof colors.neutralVariant;
  lightSurface: typeof colors.lightSurface;
  darkSurface: typeof colors.darkSurface;
}
