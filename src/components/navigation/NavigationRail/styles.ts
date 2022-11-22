import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette: { surface1, onSurfaceVariant }, borderRadius }) => ({
    rail: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 80,
      height: '100%',
      paddingTop: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center',
      background: surface1
    },
    head: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    },
    iconWrapper: {
      padding: 16
    },
    button: {
      borderRadius: borderRadius.full,
      padding: 8,
      fill: onSurfaceVariant
    },
    icon: {
      fill: 'inherit'
    },
    fab: {
      '&:not([disabled])': {
        filter: 'none'
      }
    },
    body: {}
  })
);
