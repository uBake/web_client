import { createUseStyles } from 'react-jss';

import { SegmentedButtonsProps } from './SegmentedButtons';

export const useStyles = createUseStyles({
  segmentedButtons: {
    display: 'flex',
    flexDirection: ({ direction }: SegmentedButtonsProps) => direction,
    width: 'max-content',
    minWidth: ({ direction }: SegmentedButtonsProps) =>
      direction === 'row' ? 'max-content' : 160,
    transition: 'all .3s ease-in-out'
  }
});
