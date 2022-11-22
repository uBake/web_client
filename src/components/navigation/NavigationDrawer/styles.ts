import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({
    palette: { onSurface, surface1, onSurfaceVariant },
    borderRadius,
    typography
  }) => ({
    drawer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      minWidth: 264,
      maxWidth: 320,
      marginRight: 56,
      height: '100%',
      paddingTop: 48,
      display: 'flex',
      flexDirection: 'column',
      background: surface1,
      borderRadius: [0, borderRadius.large, borderRadius.large, 0]
    },
    head: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 16,
      padding: [24, 16]
    },
    iconWrapper: {
      padding: 4
    },
    button: {
      borderRadius: borderRadius.full,
      padding: 8,
      fill: onSurfaceVariant
    },
    icon: {
      fill: 'inherit'
    },
    labels: {
      display: 'flex',
      flexDirection: 'column',
      padding: [0, 12]
    },
    title: {
      color: onSurface,
      ...typography.sizes.headline.small,
      ...typography.weights[700]
    },
    subtitle: {
      color: onSurfaceVariant,
      ...typography.sizes.body.small
    },
    fab: {
      '&:not([disabled])': {
        filter: 'none'
      }
    },
    body: {}
  })
);
