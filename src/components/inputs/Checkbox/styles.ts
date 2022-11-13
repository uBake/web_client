import { createUseStyles } from 'react-jss';

import { InputProps } from './../Input';

type StyleProp = Partial<InputProps>;

export const useStyles = createUseStyles({
  wrapper: {
    position: 'relative',
    cursor: ({ disabled }: StyleProp) => (disabled ? 'not-allowed' : 'pointer')
  },
  disabled: {},
  check: {},
  checked: {},
  label: {
    cursor: ({ disabled }: StyleProp) => (disabled ? 'not-allowed' : 'pointer')
  },
  checkbox: {
    margin: 0,
    opacity: 0,
    position: 'absolute',
    cursor: ({ disabled }: StyleProp) => (disabled ? 'not-allowed' : 'pointer')
  }
});
