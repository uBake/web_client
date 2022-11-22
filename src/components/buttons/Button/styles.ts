import { createUseStyles } from 'react-jss';

import { getGradientWithOpacity } from '../../../themes/helpers';
import { ButtonProps } from './Button';
import { getPaddings } from './helpers';

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
      gap: ({ direction }: ButtonProps) =>
        direction && ['column', 'column-reverse'].includes(direction) ? 0 : 8,
      minWidth: 40,
      minHeight: 40,
      border: 'none',
      borderRadius: borderRadius.large,
      padding: ({ icon, label, direction }: ButtonProps) =>
        getPaddings({ icon, label, direction }),
      margin: 0,
      flexDirection: ({ direction }: ButtonProps) => direction,
      cursor: 'pointer',
      color: primary,
      fill: primary,
      ...typography.sizes.label.large,
      '&[disabled]': {
        cursor: 'not-allowed',
        background: onSurface + opacity[12],
        color: onSurface + opacity[38],
        fill: onSurface + opacity[38],
        filter: 'none'
      }
    },
    // Variants
    filled: {
      background: primary,
      color: onPrimary,
      fill: onPrimary,
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
      fill: onPrimaryContainer,
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
      '&:hover': {
        background: primary + opacity[8]
      },
      '&:active': { background: primary + opacity[12] },
      '&[disabled]': {
        background: 'transparent'
      }
    },

    icon: {
      fill: 'inherit'
    }
  })
);
