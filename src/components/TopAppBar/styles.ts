import { createUseStyles } from 'react-jss';

import { TopAppBarProps } from './TopAppBar';

type StyleProps = Partial<TopAppBarProps>;

export const useStyles = createUseStyles(({ palette, typography }) => ({
  wrapper: {
    display: 'grid',
    paddingTop: 48
  },
  head: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ({ size }: StyleProps) =>
      size === 'standard' ? 'flex-start' : 'space-between',

    flexWrap: ({ size }: StyleProps) =>
      size === 'standard' ? 'no-wrap' : 'wrap',
    columnGap: 4,
    rowGap: ({ size }: StyleProps) => (size === 'large' ? 36 : 0)
  },
  leftPart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48
  },
  rightPart: {
    display: 'flex',
    alignItems: 'center',
    width: 128,
    height: 48,
    '&>*': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: 48
    },
    '&>*:last-child': {
      width: 32
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    order: ({ size }: StyleProps) => (size === 'standard' ? 0 : 3),
    padding: ({ size }: StyleProps) => (size === 'standard' ? 0 : '0 16px'),
    width: '100%',
    height: 64,
    color: palette.onSurface,
    textAlign: 'start',
    ...typography.sizes.headline.small,
    ...typography.weights[700]
  },
  tabs: {}
}));
