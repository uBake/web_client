import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ borderRadius, palette: { primary } }) => ({
    wrapper: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 56,
      minHeight: 56
    },
    circle: {
      position: 'absolute',
      top: 'calc(50% - 20px)',
      left: 'calc(50% - 20px)',
      width: 40,
      height: 40,
      borderRadius: borderRadius.full,
      border: `4px solid ${primary}`,
      borderTopColor: 'transparent',
      transformOrigin: 'center',
      animation: '$circle 1.5s ease-in-out infinite',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 'calc(50% - 20px)',
        left: 'calc(50% - 20px)',
        width: 40,
        height: 40,
        borderRadius: borderRadius.full,
        border: `4px solid ${primary}`,
        borderTopColor: 'transparent',
        boxSizing: 'border-box',
        transformOrigin: 'center',
        animation: '$circle 1.5s ease-in-out infinite',
        animationDelay: '0.3s'
      }
    },
    '@keyframes circle': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '50%': {
        transform: 'rotate(210deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    }
  })
);
