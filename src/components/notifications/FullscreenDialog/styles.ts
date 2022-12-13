import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(({ palette: { surface1 } }) => ({
  wrapper: {
    '&[open]': {
      background: surface1,
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: 0,
      paddingTop: 48,
      border: 'none'
    }
  }
}));
