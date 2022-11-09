import { DefaultTheme } from 'react-jss';

import { colors } from './colors';
import { defaultTheme } from './default';

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    primary: colors.primary[80],
    onPrimary: colors.primary[20],
    primaryContainer: colors.primary[30],
    onPrimaryContainer: colors.primary[90],
    secondary: colors.secondary[80],
    onSecondary: colors.secondary[20],
    secondaryContainer: colors.secondary[30],
    onSecondaryContainer: colors.secondary[90],
    tertiary: colors.tertiary[80],
    onTertiary: colors.tertiary[20],
    tertiaryContainer: colors.tertiary[30],
    onTertiaryContainer: colors.tertiary[90],
    error: colors.error[80],
    onError: colors.error[20],
    errorContainer: colors.error[30],
    onErrorContainer: colors.error[90],
    background: colors.neutral[10],
    onBackground: colors.neutral[90],
    surface: colors.darkSurfaces[0],
    onSurface: colors.neutral[80],
    surfaceVariant: colors.neutralVariant[30],
    onSurfaceVariant: colors.neutralVariant[80],
    outline: colors.neutralVariant[60],
    surface1: colors.darkSurfaces[1],
    surface2: colors.darkSurfaces[2],
    surface3: colors.darkSurfaces[3],
    surface4: colors.darkSurfaces[4],
    surface5: colors.darkSurfaces[5]
  },
  border: {
    outline: `1px solid ${colors.neutralVariant[60]}`
  },
  name: 'Dark'
};
