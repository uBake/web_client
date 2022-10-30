import * as colors from './colors';
import { defaultTheme } from './default';

export const lightTheme = {
  ...defaultTheme,
  palette: {
    primary: colors.primary[40],
    onPrimary: colors.primary[100],
    primaryContainer: colors.primary[90],
    onPrimaryContainer: colors.primary[10],
    secondary: colors.secondary[40],
    onSecondary: colors.secondary[100],
    secondaryContainer: colors.secondary[90],
    onSecondaryContainer: colors.secondary[10],
    tertiary: colors.tertiary[40],
    onTertiary: colors.tertiary[100],
    tertiaryContainer: colors.tertiary[90],
    onTertiaryContainer: colors.tertiary[10],
    error: colors.error[40],
    onError: colors.error[100],
    errorContainer: colors.error[90],
    onErrorContainer: colors.error[10],
    background: colors.neutral[99],
    onBackground: colors.neutral[10],
    surface: colors.neutral[99],
    onSurface: colors.neutral[10],
    surfaceVariant: colors.neutralVariant[90],
    onSurfaceVariant: colors.neutralVariant[30],
    outline: colors.neutralVariant[50]
  }
};
