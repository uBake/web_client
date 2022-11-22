import { createUseStyles } from 'react-jss';

import { DividerProps } from './Divider';

interface StyleProps extends DividerProps {
  size: 1 | 8;
}

export const useStyles = createUseStyles(({ palette, typography }) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: ({ direction }: StyleProps) =>
      direction === 'horizontal' ? '100%' : 'auto',
    height: ({ direction }: StyleProps) =>
      direction === 'vertical' ? '100%' : 'auto'
  },
  divider: {
    border: 'none',
    background: palette.surfaceVariant,
    width: ({ direction, size }: StyleProps) =>
      direction === 'horizontal' ? '100%' : size,
    height: ({ direction, size }: StyleProps) =>
      direction === 'vertical' ? '100%' : size,
    margin: ({ direction }: StyleProps) =>
      direction === 'horizontal' ? '8px 0' : '0 8px'
  },
  text: {
    padding: '8px 16px 12px',
    color: palette.onSurfaceVariant,
    ...typography.sizes.label.large
  }
}));
