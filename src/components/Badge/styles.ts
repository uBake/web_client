import { createUseStyles } from 'react-jss';

import { BadgeProps } from './Badge';

export const useStyles = createUseStyles(
  ({ palette, borderRadius, aspectRatio, typography }) => ({
    wrapper: {
      position: 'relative',
      width: 'fit-content'
    },
    badge: {
      aspectRatio: aspectRatio['1/1'],
      minWidth: ({ count }: BadgeProps) => (count !== undefined ? 16 : 8),
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
