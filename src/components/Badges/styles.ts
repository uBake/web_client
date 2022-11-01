import { createUseStyles } from 'react-jss';


export const useStyles = createUseStyles(({ palette, borderRadius }) => ({
  wrapper: {
    position: 'relative'
  },
  badge: {
    position: 'absolute',
    borderRadius: borderRadius.full
  }
}));