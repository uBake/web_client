import { createUseStyles } from 'react-jss';


export const useStyles = createUseStyles(({ palette, borderRadius }) => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    minWidth: 40,
    minHeight: 40,
    border: 'none',
    borderRadius: borderRadius.full,
    padding: [10, 24]
  },
  filled: {
    background: palette.primary,
    color: palette.onPrimary,
    '&:hover': {},
    '&:active': {},
    '&[disabled]': {
			color: palette.onSurface
		}
  },
  tonal: {
    background: palette.primaryContainer,
    color: palette.onPrimaryContainer
  },
  outlined: {
		background: 'transparent',
		border: [1, 'solid', palette.outline],
		color: palette.primary
	},
  elevated: {
		background: palette.surface
	},
  ghost: {}
}));