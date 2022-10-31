import { Theme } from '../types';
import { colors }  from './colors';
import { defaultTheme } from './default';


export const lightTheme: Theme = {
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
    outline: colors.neutralVariant[50],
    surface1: 'rgba(108, 89, 95, 0.05)',
    surface2:
      'linear-gradient(0deg, rgba(108, 89, 95, 0.08), rgba(108, 89, 95, 0.08)), #FFFBFF',
    surface3:
      'linear-gradient(0deg, rgba(108, 89, 95, 0.11), rgba(108, 89, 95, 0.11)), #FFFBFF',
    surface4: '',
    surface5: ''
  },
  border: {
    outline: `1px solid ${colors.neutralVariant[50]}`
  },
  name: 'Light'
};