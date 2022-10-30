import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(({ palette, borderRadius }) => ({
  button: {
    background: palette.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
		gap: 8,
    minWidth: 40,
    minHeight: 40,
    color: palette.onPrimary,
    border: 'none',
		borderRadius: borderRadius.full,
    padding: [10, 24]
  }
}));
