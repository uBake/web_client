import { createUseStyles } from 'react-jss';

import { SegmentedButtonsProps } from './SegmentedButtons';

export const useStyles = createUseStyles(
  ({ palette, borderRadius, border }) => ({
    segmentedButtons: {
      display: 'flex',
      flexDirection: ({ direction }: Partial<SegmentedButtonsProps>) =>
        direction,
      width: 'max-content',
      minWidth: ({ direction }: Partial<SegmentedButtonsProps>) =>
        direction === 'row' ? 'max-content' : 160,
      transition: 'all .3s ease-in-out'
    }
  })
);
