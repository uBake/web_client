import { createUseStyles } from 'react-jss';

import { SegmentedButtonProps } from './SegmentedButton';

export const useStyles = createUseStyles(({ palette, borderRadius, typography }) => ({
  segmentedButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    border: [1, palette.outline, 'solid'],
    padding: [10, 17],
    background: ({ direction }: Partial<SegmentedButtonProps>) => 'transparent',
    color: palette.onSurface,
    cursor: 'pointer',
    margin: 0,
		transition: 'all .3s ease-in-out',
    ...typography.sizes.label.large,
    '&:first-of-type': {
      borderTopRightRadius: ({ direction }: Partial<SegmentedButtonProps>) =>
        direction === 'horizontal' ? 0 : borderRadius.large,
      borderTopLeftRadius: borderRadius.large,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: ({ direction }: Partial<SegmentedButtonProps>) =>
        direction === 'horizontal' ? borderRadius.large : 0
    },
    '&:last-of-type': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: ({ direction }: Partial<SegmentedButtonProps>) =>
        direction === 'horizontal' ? borderRadius.large : 0,
      borderBottomLeftRadius: ({ direction }: Partial<SegmentedButtonProps>) =>
        direction === 'horizontal' ? 0 : borderRadius.large,
      borderBottomRightRadius: borderRadius.large
    },
    '&:not(:first-of-type)': {
      borderLeftWidth: ({ direction }: Partial<SegmentedButtonProps>) => (direction === 'horizontal' ? 0 : 1),
      borderTopWidth: ({ direction }: Partial<SegmentedButtonProps>) => (direction === 'horizontal' ? 1 : 0)
    },
    '&:not(:first-of-type)&:not(:last-of-type)': {
      borderRadius: 0
    },
    '&:only-of-type&:last-of-type': {
      border: [1, palette.outline, 'solid'],
      borderRadius: borderRadius.large
    }
  }
}));
