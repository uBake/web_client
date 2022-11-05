import { createUseStyles } from 'react-jss';

import { SegmentedButtonProps } from './SegmentedButton';

export const useStyles = createUseStyles(({ palette, borderRadius, typography }) => ({
  segmentedButton: {
    '&:first-of-type': {
      borderTopRightRadius: ({ btnsDirection }: Partial<SegmentedButtonProps>) =>
        btnsDirection === 'row' ? 0 : borderRadius.large,
      borderTopLeftRadius: borderRadius.large,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: ({ btnsDirection }: Partial<SegmentedButtonProps>) =>
        btnsDirection === 'row' ? borderRadius.large : 0
    },
    '&:last-of-type': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: ({ btnsDirection }: Partial<SegmentedButtonProps>) =>
        btnsDirection === 'row' ? borderRadius.large : 0,
      borderBottomLeftRadius: ({ btnsDirection }: Partial<SegmentedButtonProps>) =>
        btnsDirection === 'row' ? 0 : borderRadius.large,
      borderBottomRightRadius: borderRadius.large
    },
    '&:not(:first-of-type)': {
      borderLeftWidth: ({ btnsDirection }: Partial<SegmentedButtonProps>) => (btnsDirection === 'row' ? 0 : 1),
      borderTopWidth: ({ btnsDirection }: Partial<SegmentedButtonProps>) => (btnsDirection === 'row' ? 1 : 0)
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
