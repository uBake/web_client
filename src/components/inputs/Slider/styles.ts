import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ borderRadius, palette: { primary }, opacity }) => ({
    wrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    thumbWrapper: {
      position: 'absolute',
      width: 20,
      height: 20,
      display: 'block',
      pointerEvents: 'none',
      top: -10,
      transform: 'translateX(2px)'
    },
    progress: {
      position: 'absolute',
      height: 4,
      backgroundColor: primary
    },
    range: {
      appearance: 'none',
      width: '100%',
      height: 4,
      color: primary,
      background: primary + opacity[12],
      '&::-webkit-slider-thumb': {
        appearance: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        width: 20,
        borderRadius: borderRadius.full,
        background: primary,
        cursor: 'ew-resize'
      }
    }
  })
);
