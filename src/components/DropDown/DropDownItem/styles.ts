import { createUseStyles } from 'react-jss';

import { getGradientWithOpacity } from './../../../themes/helpers';

export const useStyles = createUseStyles(
  ({
    borderRadius,
    palette: { onSurface, onSurfaceVariant },
    typography,
    opacity
  }) => ({
    wrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    content: {
      width: '100%',
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      padding: '12px 16px 12px 12px',
      gap: 12,
      cursor: 'pointer',
      borderRadius: borderRadius.large,
      '&:hover': {
        background: getGradientWithOpacity(onSurface, opacity[8])
      },
      '&:active': {
        background: getGradientWithOpacity(onSurface, opacity[12])
      }
    },
    iconSlot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      fill: onSurface
    },
    title: {
      flexGrow: 1,
      color: onSurfaceVariant,
      ...typography.sizes.title.medium
    },
    metadata: {
      color: onSurfaceVariant,
      ...typography.sizes.body.medium
    }
  })
);
