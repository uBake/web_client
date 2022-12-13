declare global {
  namespace Jss {
    export interface Theme {
      palette: Palette;
      elevations: Elevations;
      typography: Typography;
      zIndex: ZIndex;
      borderRadius: BorderRadius;
      border: Border;
      aspectRatio: AspectRatio;
      opacity: Opacity;
      name: string;
    }
  }
}

export type FlexDirections =
  | 'column'
  | 'row'
  | 'column-reverse'
  | 'row-reverse';

export type Opacity = Record<opacityVariants, string>;

export type opacityVariants = 8 | 12 | 16 | 32 | 38 | 100;

export type ElevationLevel = 1 | 2 | 3 | 4 | 5;

export type Elevations = Record<ElevationLevel, string>;

export type AspectRatio = Record<AspectRatioVariant, number>;

type AspectRatioVariant = '1/1' | '5/4' | '4/3' | '16/9';

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

export type Palette = Record<PaletteColorNames, string>;

export enum PaletteColorNames {
  primary = 'primary',
  inversePrimary = 'inversePrimary',
  onPrimary = 'onPrimary',
  primaryContainer = 'primaryContainer',
  onPrimaryContainer = 'onPrimaryContainer',
  secondary = 'secondary',
  onSecondary = 'onSecondary',
  secondaryContainer = 'secondaryContainer',
  onSecondaryContainer = 'onSecondaryContainer',
  tertiary = 'tertiary',
  onTertiary = 'onTertiary',
  tertiaryContainer = 'tertiaryContainer',
  onTertiaryContainer = 'onTertiaryContainer',
  error = 'error',
  onError = 'onError',
  errorContainer = 'errorContainer',
  onErrorContainer = 'onErrorContainer',
  background = 'background',
  onBackground = 'onBackground',
  surface = 'surface',
  inverseSurface = 'inverseSurface',
  onSurface = 'onSurface',
  inverseOnSurface = 'inverseOnSurface',
  surfaceVariant = 'surfaceVariant',
  onSurfaceVariant = 'onSurfaceVariant',
  outline = 'outline',
  surface1 = 'surface1',
  surface2 = 'surface2',
  surface3 = 'surface3',
  surface4 = 'surface4',
  surface5 = 'surface5'
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
