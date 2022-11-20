import { createUseStyles } from 'react-jss';

import { colors } from './../../themes/colors';

export const useStyles = createUseStyles(({ palette, opacity }) => ({
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: colors.neutral[0] + opacity[32]
  }
}));
