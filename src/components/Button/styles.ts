import { createUseStyles } from 'react-jss';

import { getGradientWithOpacity } from '../../themes/helpers';
import { ButtonProps } from './Button';

export const useStyles = createUseStyles(
  ({
    palette: { primary, onPrimary, onSurface, primaryContainer, onPrimaryContainer, outline, surface1 },
    borderRadius,
    typography,
    opacity
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
        cursor: 'not-allowed'
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
      },
      '&[disabled]': {
        background: `${onSurface}1E`,
        color: `${onSurface}5F`
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
      },
      '&[disabled]': {
        background: `${onSurface}1E`,
        color: `${onSurface}5F`
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
        borderColor: `${onSurface}1E`,
        color: `${onSurface}5F`
      }
    },
    elevated: {
      background: surface1,
      color: primary,
      '&:hover': {
        backgroundImage: getGradientWithOpacity(primary, opacity[8])
      }
      // TODO: finish it later
      // '&:active': {
      //   backgroundImage: getGradientWithOpacity(primary, opacity[12]),
      // },
      // '&[disabled]': {
      //   color: onSurface,
      //   background: primaryContainer
      // }
    },
    ghost: {
      background: 'transparent',
      color: primary,
      '&:hover': {
        background: primary + opacity[8]
      },
      '&:active': { background: primary + opacity[12] },
      '&[disabled]': {
        color: onSurface,
        background: primaryContainer[100]
      }
    }
  })
);
