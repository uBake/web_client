import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(({ palette, borderRadius, typography }) => ({
  wrapper: {
    position: 'relative',
    width: 'fit-content'
  },
  tooltipWrapper: {
    position: 'absolute'
  },
  tooltip: {
    position: 'relative',
    padding: 6,
    background: palette.primary,
    color: palette.onPrimary,
    borderRadius: borderRadius.full,
    ...typography.sizes.label.medium
  },
  tip: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: `8px solid ${palette.onBackground}`,
		zIndex: 0
  },
  top: {
    top: 'calc(-100%)',
		tooltip: {
			padding: 20,
			tip: {
				bottom: 100
			}
		}
  },
  bottom: {},
  left: {},
  right: {}
}));
