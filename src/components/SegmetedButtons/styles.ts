import { createUseStyles } from 'react-jss';

import { SegmentedButtonsProps } from './SegmentedButtons';

export const useStyles = createUseStyles(({palette, borderRadius, border}) => ({
  segmentedButtons: {
    display: 'flex',
    flexDirection: ({ direction }: Partial<SegmentedButtonsProps>) => (direction === 'horizontal' ? 'row' : 'column'),
		width: 'max-content',
		minWidth: ({ direction }: Partial<SegmentedButtonsProps>) => (direction === 'horizontal' ? 'max-content' : 160),
		transition: 'all .3s ease-in-out'
  }
}));
