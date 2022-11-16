import { createUseStyles } from 'react-jss';

import { InputProps } from './../Input';

type StyleProp = Partial<InputProps>;

export const useStyles = createUseStyles(
  ({ opacity, palette, borderRadius, typography }) => ({
    wrapper: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 15,
      color: palette.onSurface,
      width: 'fit-content'
    },
    checkbox: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: {
        color: palette.onSurface,
        width: 2,
        style: 'solid'
      },
      cursor: 'pointer',
      borderRadius: borderRadius.extraSmall / 2,
      width: 18,
      height: 18,
      '&>div': {
        position: 'absolute',
        width: 0,
        height: 0,
        zIndex: 0
      },
      '&[data-checked=true]': {
        borderColor: palette.primary,
        background: palette.primary,
        '& svg': {
          fill: palette.onPrimary
        }
      },
      '&[data-disabled=false][data-error=true]': {
        borderColor: palette.error,
        '&[data-checked=true]': {
          background: palette.error
        }
      },
      '&[data-disabled=true]': {
        borderColor: palette.onSurfaceVariant + opacity[12],
        cursor: 'not-allowed',
        '&[data-checked=true]': {
          borderColor: palette.onSurfaceVariant + opacity[12],
          background: palette.onSurfaceVariant + opacity[12],
          '& svg': {
            background: palette.onSurfaceVariant + opacity[12],
            fill: palette.onPrimary
          }
        }
      },
      '&[data-disabled=false]:not(:active):hover>div': {
        width: 40,
        height: 40,
        borderRadius: borderRadius.full,
        background: palette.onSurface + opacity[8]
      },
      '&[data-disabled=false]:active>div': {
        width: 40,
        height: 40,
        borderRadius: borderRadius.full,
        background: palette.onSurface + opacity[12]
      }
    },
    check: {
      width: '100%',
      height: '100%'
    },
    label: {
      cursor: 'pointer',
      '&[data-disabled=true]': {
        color: palette.onSurfaceVariant + opacity[38],
        cursor: 'not-allowed'
      },
      ...typography.sizes.body.medium
    },
    input: {
      width: 0,
      height: 0,
      margin: 0,
      opacity: 0,
      position: 'absolute',
      pointerEvents: 'none'
    }
  })
);
