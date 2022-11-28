import { createUseStyles } from 'react-jss';

import { getGradientWithOpacity } from '../../themes/helpers';

export const useStyles = createUseStyles(
  ({
    borderRadius,
    elevations,
    opacity,
    palette: {
      onSurface,
      onSurfaceVariant,
      outline,
      surface1,
      secondaryContainer,
      onSecondaryContainer
    },
    typography
  }) => ({
    wrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      padding: 4,
      borderRadius: borderRadius.small,
      cursor: 'pointer',
      fill: onSurfaceVariant,
      color: onSurfaceVariant,
      '&:not($active):hover': {
        backgroundColor: onSurfaceVariant + opacity[8]
      },
      '&:not($active):active': {
        backgroundColor: onSurfaceVariant + opacity[12]
      }
    },
    outlined: {
      boxShadow: `inset 0px 0px 0px 1px ${outline}`
    },
    elevated: {
      background: surface1,
      filter: elevations[1]
    },
    active: {
      backgroundColor: secondaryContainer,
      color: onSecondaryContainer,
      fill: onSecondaryContainer,
      boxShadow: 'none',
      '& $check': {
        fill: secondaryContainer
      },
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
    },
    disabled: {
      boxShadow: 'none',
      cursor: 'not-allowed',
      background: onSurface + opacity[8],
      color: onSurface + opacity[32],
      fill: onSurface + opacity[32]
    },
    input: {
      opacity: 0,
      width: 0,
      height: 0,
      position: 'absolute'
    },
    label: {
      cursor: 'pointer',
      padding: [2, 8],
      color: 'inherit',
      ...typography.sizes.label.large
    },
    checkWrapper: {
      background: onSecondaryContainer,
      borderRadius: borderRadius.full,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2
    },
    check: {},
    icon: {
      fill: 'inherit'
    },
    leftIcon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 4
    },
    rightIcon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 4
    },
    avatar: {}
  })
);
