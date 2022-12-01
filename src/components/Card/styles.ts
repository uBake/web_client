import { createUseStyles } from 'react-jss';

import { getGradientWithOpacity } from './../../themes/helpers';

export const useStyles = createUseStyles(
  ({
    borderRadius,
    border: { outline },
    elevations,
    palette: { surface, surface1, surfaceVariant, onSurface },
    opacity
  }) => ({
    card: {
      borderRadius: borderRadius.extraLarge,
      width: 'fit-content',
      height: 'fit-content',
      overflow: 'hidden',
      cursor: 'pointer',
      '&:hover': {
        backgroundImage: getGradientWithOpacity(onSurface, opacity[8])
      },
      '&:active': {
        backgroundImage: getGradientWithOpacity(onSurface, opacity[12])
      }
    },

    // Variants
    outlined: {
      border: outline,
      backgroundColor: surface
    },
    elevated: {
      background: surface1,
      filter: elevations[1],
      '&:hover': {
        filter: elevations[2]
      },
      '&:active': {
        filter: elevations[3]
      }
    },
    filled: {
      backgroundColor: surfaceVariant
    }
  })
);
