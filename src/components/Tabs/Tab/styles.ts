import { createUseStyles } from 'react-jss';

import { TabProps } from './Tab';

type StyleProps = Partial<TabProps>;

export const useStyles = createUseStyles(({ palette, typography }) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 4px',
    height: 48,
    cursor: 'pointer'
  },
  title: {
    color: ({ selected }: StyleProps) =>
      selected ? palette.primary : palette.onSurfaceVariant,
    ...typography.sizes.label.large
  },
  border: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 3,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    background: ({ selected }: StyleProps) =>
      selected ? palette.primary : 'transparent'
  }
}));
