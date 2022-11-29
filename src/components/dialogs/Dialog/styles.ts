import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ borderRadius, palette: { onSurface, surface3 }, typography }) => ({
    wrapper: {
      '&[open]': {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 312,
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        borderRadius: borderRadius.extraLarge,
        background: surface3,
        padding: 0,
        paddingTop: 20,
        margin: 0
      }
    },
    head: {
      padding: [0, 24, 16],
      display: 'flex',
      alignItems: 'center',
      gap: 16
    },
    title: {
      color: onSurface,
      ...typography.sizes.headline.small
    },
    icon: {
      fill: onSurface
    },
    content: {
      padding: [0, 24, 24]
    },
    footer: {
      padding: 16,
      display: 'flex',
      justifyContent: 'space-between'
    },
    btn: {
      padding: [10, 12]
    },
    btnsWrapper: {
      display: 'flex',
      gap: 8
    }
  })
);
