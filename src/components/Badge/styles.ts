import { createUseStyles } from 'react-jss';

import { BadgeProps } from './Badge';

export const useStyles = createUseStyles(
  ({ palette, borderRadius, aspectRatio, typography }) => ({
    wrapper: {
      position: 'relative',
      width: 'fit-content'
    },
    badge: {
      aspectRatio: ({ count }: BadgeProps) =>
        count && count > 1 ? 'auto' : aspectRatio['1/1'],
      minWidth: ({ count }: BadgeProps) => (count && count > 1 ? 'auto' : 8),
      height: ({ count }: BadgeProps) => (count && count > 1 ? 16 : 8),
      padding: ({ count }: BadgeProps) => (count && count > 1 ? '0 4.5px' : 0),
      margin: 0,
      marginBlock: 0,
      marginInline: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      borderRadius: borderRadius.full,
      background: palette.error,
      color: palette.onError,
      ...typography.sizes.label.small,
      ...typography.weights[700]
    },
    top: {
      top: 0,
      transform: ({ hPos }: BadgeProps) =>
        hPos === 'right' ? 'translate(50%, -50%)' : 'translate(-50%, -50%)'
    },
    bottom: {
      bottom: 0,
      transform: ({ hPos }: BadgeProps) =>
        hPos === 'right' ? 'translate(50%, 50%)' : 'translate(-50%, 50%)'
    },
    right: {
      right: 0
    },
    left: {
      left: 0
    }
  })
);
