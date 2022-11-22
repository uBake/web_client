import { createUseStyles } from 'react-jss';

import { getGradientWithOpacity } from '../../themes/helpers';
import { ButtonProps } from './Button';

export const useStyles = createUseStyles(
  ({
    palette: {
      onPrimary,
      onPrimaryContainer,
      onSurface,
      outline,
      primary,
      primaryContainer,
      surface1
    },
    borderRadius,
    typography,
    opacity,
    elevations
  }) => ({
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
      minWidth: 40,
      minHeight: 40,
      border: 'none',
      borderRadius: borderRadius.large,
      padding: [10, 24],
      margin: 0,
      flexDirection: ({ direction }: ButtonProps) => direction,
      cursor: 'pointer',
      ...typography.sizes.label.large,
      '&[disabled]': {
        cursor: 'not-allowed',
        background: onSurface + opacity[12],
        color: onSurface + opacity[38],
        fill: onSurface + opacity[38],
        filter: 'none'
      }
    },
    filled: {
      background: primary,
      color: onPrimary,
      '&:hover': {
        backgroundImage: getGradientWithOpacity(onPrimary, opacity[8])
      },
      '&:active': {
        backgroundImage: getGradientWithOpacity(onPrimary, opacity[12])
      }
    },
    tonal: {
      background: primaryContainer,
      color: onPrimaryContainer,
      '&:hover': {
        background: primaryContainer,
        backgroundImage: getGradientWithOpacity(onPrimaryContainer, opacity[8])
      },
      '&:active': {
        background: primaryContainer,
        backgroundImage: getGradientWithOpacity(onPrimaryContainer, opacity[12])
      }
    },
    outlined: {
      background: 'transparent',
      border: [1, 'solid', outline],
      color: primary,
      '&:hover': {
        background: primaryContainer,
        backgroundImage: getGradientWithOpacity(primary, opacity[8])
      },
      '&:active': {
        background: primaryContainer,
        backgroundImage: getGradientWithOpacity(primary, opacity[12])
      },
      '&[disabled]': {
        background: 'transparent',
        borderColor: onSurface + opacity[12]
      }
    },
    elevated: {
      background: surface1,
      color: primary,
      filter: elevations[1],
      '&:hover': {
        backgroundImage: getGradientWithOpacity(primary, opacity[8])
      },
      '&:active': {
        backgroundImage: getGradientWithOpacity(primary, opacity[12])
      }
    },
    ghost: {
      background: 'transparent',
      color: primary,
      '&:hover': {
        background: primary + opacity[8]
      },
      '&:active': { background: primary + opacity[12] },
      '&[disabled]': {
        background: 'transparent'
      }
    }
  })
);
