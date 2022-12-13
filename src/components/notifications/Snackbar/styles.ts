import { createUseStyles } from 'react-jss';

import { getGradientWithOpacity } from './../../../themes/helpers';
import { SnackbarProps } from './Snackbar';

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
      flexWrap: ({ type }: Partial<SnackbarProps>) =>
        type === 'multiple' ? 'wrap' : 'nowrap',
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
      padding: [4, 0],
      marginLeft: 'auto'
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
