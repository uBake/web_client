import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(({ borderRadius }) => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 4
  },
  iconButtonWrapper: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    borderRadius: borderRadius.full
  }
}));
