import { createUseStyles } from 'react-jss';

import { getGradientWithOpacity } from './../../themes/helpers';

export const useStyles = createUseStyles(
  ({
    borderRadius,
    elevations,
    opacity,
    palette: {
      onSurface,
      primaryContainer,
      onPrimaryContainer,
      secondaryContainer,
      onSecondaryContainer,
      tertiaryContainer,
      onTertiaryContainer,
      surface3,
      primary
    },
    typography
  }) => ({
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      border: 'none',
      minWidth: 40,
      minHeight: 40,
      '&[disabled]': {
        cursor: 'not-allowed',
        background: onSurface + opacity[12],
        '& $icon': {
          fill: onSurface + opacity[38]
        },
        '& $text': {
          color: onSurface + opacity[38]
        }
      },
      '&:not([disabled])': {
        filter: elevations[3],
        '&:hover': {
          filter: elevations[4]
        },
        '&:active': {
          filter: elevations[5]
        }
      }
    },
    // Variants
    primary: {
      background: primaryContainer,
      '& $icon': {
        fill: onPrimaryContainer
      },
      '& $text': {
        color: onPrimaryContainer
      },
      '&:not([disabled])': {
        '&:hover': {
          backgroundImage: getGradientWithOpacity(
            onPrimaryContainer,
            opacity[8]
          )
        },
        '&:active': {
          backgroundImage: getGradientWithOpacity(
            onPrimaryContainer,
            opacity[12]
          )
        }
      }
    },
    secondary: {
      background: secondaryContainer,
      '& $icon': {
        fill: onSecondaryContainer
      },
      '& $text': {
        color: onSecondaryContainer
      },
      '&:not([disabled])': {
        '&:hover': {
          backgroundImage: getGradientWithOpacity(
            onSecondaryContainer,
            opacity[8]
          )
        },
        '&:active': {
          backgroundImage: getGradientWithOpacity(
            onSecondaryContainer,
            opacity[12]
          )
        }
      }
    },
    tertiary: {
      background: tertiaryContainer,
      '& $icon': {
        fill: onTertiaryContainer
      },
      '& $text': {
        color: onTertiaryContainer
      },
      '&:not([disabled])': {
        '&:hover': {
          backgroundImage: getGradientWithOpacity(
            onTertiaryContainer,
            opacity[8]
          )
        },
        '&:active': {
          backgroundImage: getGradientWithOpacity(
            onTertiaryContainer,
            opacity[12]
          )
        }
      }
    },
    surface: {
      background: surface3,
      '& $icon': {
        fill: primary
      },
      '& $text': {
        color: primary
      },
      '&:not([disabled])': {
        '&:hover': {
          backgroundImage: getGradientWithOpacity(primary, opacity[8])
        },
        '&:active': {
          backgroundImage: getGradientWithOpacity(primary, opacity[12])
        }
      }
    },
    // Sizes
    small: {
      borderRadius: borderRadius.medium,
      padding: 8
    },
    medium: {
      borderRadius: borderRadius.large,
      padding: 16
    },
    large: {
      borderRadius: borderRadius.extraLarge,
      padding: 30,
      '& $icon': {
        width: 36,
        height: 36
      }
    },
    extended: {
      borderRadius: borderRadius.large,
      padding: [16, 20, 16, 16]
    },

    icon: {},
    text: {
      ...typography.sizes.label.large
    }
  })
);
