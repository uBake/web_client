import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette: { primary, surfaceVariant } }) => ({
    wrapper: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      minWidth: 160
    },
    line: {
      position: 'absolute',
      width: '100%',
      height: 4,
      backgroundColor: primary,
      overflow: 'hidden',
      '&:before, &:after': {
        position: 'absolute',
        content: '""',
        display: 'block',
        width: '40%',
        height: 4,
        backgroundColor: surfaceVariant,
        animation: '$line 1.5s ease-in-out infinite'
      },
      '&:after': {
        animationDelay: '1.3s'
      }
    },
    '@keyframes line': {
      '0%': {
        transform: 'translateX(-100%)',
        left: 0
      },
      '50%': {
        transform: 'translateX(-50%)',
        left: '50%'
      },
      '100%': {
        left: '100%'
      }
    }
  })
);
