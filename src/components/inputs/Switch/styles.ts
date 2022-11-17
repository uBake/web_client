import { createUseStyles } from 'react-jss';

import { InputProps } from '../Input';

type StyleProps = Partial<InputProps>;

const THUMB_SIZE = 16,
  CHECKED_THUMB_SIZE = 24,
  SWITCH_PADDING = 8,
  HALO_SIZE = 40;

export const useStyles = createUseStyles(
  ({ opacity, palette, borderRadius, typography }) => ({
    wrapper: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
      width: 'fit-content'
    },
    checkbox: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      border: {
        width: 2,
        style: 'solid'
      },
      borderColor: ({ disabled }: StyleProps) =>
        disabled ? palette.onSurface + opacity[12] : palette.outline,
      cursor: ({ disabled }: StyleProps) =>
        disabled ? 'not-allowed' : 'pointer',
      borderRadius: borderRadius.large * 2,
      width: 52,
      height: 32,
      padding: SWITCH_PADDING,
      background: ({ disabled }: StyleProps) =>
        disabled ? 'transparent' : palette.surfaceVariant,
      '&:hover': {
        '& $thumb': {
          background: ({ disabled }: StyleProps) =>
            !disabled && palette.onSurfaceVariant
        },
        '& $halo': {
          background: palette.onSurface + opacity[8],
          width: ({ disabled }: StyleProps) => !disabled && HALO_SIZE,
          height: ({ disabled }: StyleProps) => !disabled && HALO_SIZE
        }
      },
      '&:active': {
        '& $thumb': {
          left: ({ disabled }: StyleProps) => !disabled && 0,
          width: ({ disabled }: StyleProps) => !disabled && 28,
          height: ({ disabled }: StyleProps) => !disabled && 28,
          background: ({ disabled }: StyleProps) =>
            !disabled && palette.onSurfaceVariant
        },
        '& $halo': {
          background: palette.onSurface + opacity[12]
        }
      }
    },
    checked: {
      borderColor: ({ disabled }: StyleProps) =>
        disabled ? 'transparent' : palette.primary,
      background: ({ disabled }: StyleProps) =>
        disabled ? palette.onSurface + opacity[12] : palette.primary,
      '& $thumb': {
        width: 24,
        height: 24,
        left: `calc(100% - ${CHECKED_THUMB_SIZE + 2}px)`,
        background: ({ disabled }: StyleProps) =>
          disabled ? palette.surface : palette.onPrimary
      },
      '&:hover': {
        '& $thumb': {
          background: ({ disabled }: StyleProps) =>
            disabled ? palette.surface : palette.primaryContainer
        }
      },
      '&:active': {
        '& $thumb': {
          left: ({ disabled }: StyleProps) =>
            !disabled && `calc(100% - ${CHECKED_THUMB_SIZE + 4}px)`,
          width: ({ disabled }: StyleProps) => !disabled && 28,
          height: ({ disabled }: StyleProps) => !disabled && 28
        }
      }
    },
    thumb: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      left: ({ withIcon }: StyleProps) => (withIcon === 'always' ? 2 : 8),
      width: ({ withIcon }: StyleProps) =>
        withIcon === 'always' ? CHECKED_THUMB_SIZE : THUMB_SIZE,
      height: ({ withIcon }: StyleProps) =>
        withIcon === 'always' ? CHECKED_THUMB_SIZE : THUMB_SIZE,
      background: ({ disabled }: StyleProps) =>
        disabled ? palette.onSurface + opacity[38] : palette.outline,
      borderRadius: borderRadius.full
    },
    halo: {
      position: 'absolute',
      width: 0,
      height: 0,
      borderRadius: borderRadius.full
    },
    doneIcon: {
      fill: ({ disabled }: StyleProps) =>
        disabled ? palette.onSurface + opacity[38] : palette.onPrimaryContainer
    },
    closeIcon: {
      fill: ({ disabled }: StyleProps) =>
        disabled ? palette.surface : palette.surfaceVariant
    },
    label: {
      cursor: ({ disabled }: StyleProps) =>
        disabled ? 'not-allowed' : 'pointer',
      color: ({ disabled }: StyleProps) =>
        disabled ? palette.onSurfaceVariant + opacity[38] : palette.onSurface,
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
