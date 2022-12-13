import { createUseStyles } from 'react-jss';

import { getGradientWithOpacity } from './../../../themes/helpers';

export const useStyles = createUseStyles(
  ({
    borderRadius,
    palette: {
      inverseSurface,
      inversePrimary,
      inverseOnSurface,
      primary,
      onSurface
    },
    opacity,
    typography
  }) => ({
    wrapper: {
      background: inverseSurface,
      borderRadius: borderRadius.large,
      color: inverseOnSurface,
      display: 'flex',
      width: 344,
      padding: [0, 8]
    },
    content: {
      padding: [12, 8],
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      ...typography.sizes.body.medium
    },
    buttonWrapper: {
      padding: [4, 0]
    },
    btn: {
      padding: [10, 12],
      color: inversePrimary,
      '&:[disabled]': {
        color: onSurface
      },
      '&:hover': {
        background: getGradientWithOpacity(primary, opacity[8])
      },
      '&:active': {
        background: getGradientWithOpacity(primary, opacity[12])
      }
    }
  })
);
