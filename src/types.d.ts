export interface Theme {
  name: 'Dark' | 'Light';
  palette: Palette;
  shadows: Shadows;
  typography: Typography;
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
      typography: Typography;
      zIndex: ZIndex;
      borderRadius: BorderRadius;
      border: Border;
      aspectRatio: AspectRatio;
    }
  }
}

export type Shadows = string[];

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

export type Colors = Record<ColorNames, Color>;

export enum ColorNames {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  error = 'error',
  neutral = 'neutral',
  neutralVariant = 'neutralVariant',
  lightSurfaces = 'lightSurfaces',
  darkSurfaces = 'darkSurfaces'
}

export type Color = Record<number, ColorTone>;

export type ColorTone = string;

export interface Typography {
  weights: FontWeights;
  sizes: TypographySizes;
}

export type FontWeights = Record<FontWeightsVariants, FontWeight>;

export type FontWeightsVariants = 400 | 500 | 700;

export type FontWeight = Record<'fontWeight', FontWeightValue>;

export type FontWeightValue = number;

export type TypographySizes = Record<TypographyTypes, TypographyTypeVariants>;

export type TypographyTypes =
  | 'display'
  | 'headline'
  | 'title'
  | 'label'
  | 'body';

export type TypographyTypeVariants = Record<TypographyTypeSizes, FontSizeProps>;

export type TypographyTypeSizes = 'large' | 'medium' | 'small';

export interface FontSizeProps {
  fontSize: number;
  lineHeight: string;
  letterSpacing?: number;
  fontWeight?: number;
}
