import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({
    palette: {
      onSurface,
      onSurfaceVariant,
      secondaryContainer,
      onSecondaryContainer
    },
    opacity,
    borderRadius,
    typography
  }) => ({
    wrapper: {
      padding: [0, 12]
    },
    item: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 8,
      flexWrap: 'nowrap',
      padding: [12, 20, 12, 16],
      borderRadius: borderRadius.large,
      background: 'transparent'
    },
    active: {
      background: secondaryContainer,
      '& $icon': {
        fill: onSecondaryContainer
      },
      '& $title': {
        color: onSecondaryContainer
      },
      '& $meta': {
        color: onSecondaryContainer
      }
    },
    disabled: {
      cursor: 'not-allowed',
      background: 'transparent',
      '& $icon': {
        fill: onSurface + opacity[32]
      },
      '& $title': {
        color: onSurface + opacity[32]
      },
      '& $meta': {
        color: onSurface + opacity[32]
      }
    },
    icon: {
      fill: onSurfaceVariant
    },
    title: {
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: [0, 4],
      color: onSurfaceVariant,
      ...typography.sizes.label.large,
      ...typography.weights[700]
    },
    meta: {
      color: onSurfaceVariant,
      ...typography.sizes.label.large
    }
  })
);
