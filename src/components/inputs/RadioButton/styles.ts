import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, opacity, borderRadius, typography }) => ({
    wrapper: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: [14, 12, 14, 14],
      width: 'fit-content',
      gap: 12
    },
    input: {
      pointerEvents: 'none',
      width: 0,
      height: 0,
      opacity: 0,
      position: 'absolute'
    },
    radio: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 20,
      height: 20,
      borderRadius: borderRadius.full,
      cursor: 'pointer',
      border: {
        width: 2,
        color: palette.onSurface,
        style: 'solid'
      },
      '&:not(:active):hover': {
        '& $circle': {
          width: 40,
          height: 40,
          background: palette.onSurface + opacity[8]
        }
      },
      '&:active': {
        '& $circle': {
          width: 40,
          height: 40,
          background: palette.onSurface + opacity[12]
        }
      }
    },
    check: {
      position: 'absolute',
      width: '0px',
      height: '0px',
      background: 'transparent',
      borderRadius: borderRadius.full,
      zIndex: 1
    },
    circle: {
      position: 'absolute',
      width: '0px',
      height: '0px',
      background: 'transparent',
      borderRadius: borderRadius.full,
      zIndex: 0
    },
    checked: {
      borderColor: palette.primary,
      '& $check': {
        width: 10,
        height: 10,
        background: palette.primary
      }
    },
    disabled: {
      borderColor: palette.onSurfaceVariant + opacity[38],
      cursor: 'not-allowed',
      '&$checked': {
        '& $check': {
          width: 10,
          height: 10,
          background: palette.onSurfaceVariant + opacity[38]
        }
      }
    },
    label: {
      cursor: 'pointer',
      color: palette.onSurface,
      '&[data-disabled=true]': {
        color: palette.onSurfaceVariant + opacity[38],
        cursor: 'not-allowed'
      },
      ...typography.sizes.body.medium
    }
  })
);
