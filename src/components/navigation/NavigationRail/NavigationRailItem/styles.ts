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
    borderRadius
  }) => ({
    item: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexWrap: 'nowrap',
      gap: 8,
      width: 'fit-content',
      padding: 12,
      borderRadius: borderRadius.full,
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
    }
  })
);
