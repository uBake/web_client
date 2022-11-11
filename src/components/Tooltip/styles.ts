import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, borderRadius, typography }) => ({
    wrapper: {
      position: 'relative',
      width: 'fit-content'
    },
    tooltipWrapper: {
      position: 'absolute'
    },
    tooltip: {
      minWidth: 28,
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 6,
      background: palette.primary,
      color: palette.onPrimary,
      borderRadius: borderRadius.full,
      ...typography.sizes.label.medium
    },
    tip: {
      position: 'absolute',
      fill: palette.primary
    },
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, -4px)',
      '&>span>svg': {
        top: '100%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 4px)',
      '&>span>svg': {
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(180deg)'
      }
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-4px, -50%)',
      '&>span>svg': {
        top: '50%',
        left: '100%',
        transform: 'translate(-50%, -50%) rotate(270deg)'
      }
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(4px, -50%)',
      '&>span>svg': {
        top: '50%',
        right: '100%',
        transform: 'translate(50%, -50%) rotate(90deg)'
      }
    }
  })
);
