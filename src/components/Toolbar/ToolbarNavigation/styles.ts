import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(({ borderRadius }) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  iconButtonWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    '&:last-of-type': {
      width: 32
    }
  },
  iconButton: {
    position: 'absolute',
    borderRadius: borderRadius.full
  }
}));
