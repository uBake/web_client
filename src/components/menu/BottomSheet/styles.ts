import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette: { surface2 }, borderRadius }) => ({
    wrapper: {
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: 360,
      background: surface2,
      paddingBottom: 16,
      borderTopLeftRadius: borderRadius.extraLarge,
      borderTopRightRadius: borderRadius.extraLarge
    },
    head: {
      padding: [0, 4]
    },
    body: {
      padding: 8
    }
  })
);
