import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ borderRadius, typography, palette }) => ({
    wrapper: {
      width: 'fit-content',
      color: palette.onSurfaceVariant
    },
    error: {
      color: palette.error,
      '& input': {
        borderWidth: 2,
        borderColor: palette.error
      }
    },
    body: {
      position: 'relative',
      ...typography.sizes.title.medium,
      ...typography.weights[700]
    },
    textInput: {
      boxSizing: 'border-box',
      borderRadius: borderRadius.large,
      padding: 16,
      minWidth: 288,
      height: 56,
      border: [1, 'solid', palette.outline],
      font: 'inherit',
      background: palette.surface,
      color: palette.onSurfaceVariant,
      '&:focus': {
        outline: 'none',
        borderWidth: 2,
        '&+span': {
          top: 0,
          left: 12,
          padding: [0, 4],
          ...typography.sizes.body.small,
          '& hr': {
            width: '100%',
            height: 3,
            background: palette.surface,
            borderTopLeftRadius: '20%'
          }
        }
      }
    },
    placeholder: {
      position: 'absolute',
      top: '50%',
      left: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      '& hr': {
        position: 'absolute',
        top: '50%',
        left: 0,
        margin: 0,
        zIndex: -1,
        width: 0,
        height: 0,
        background: 'transparent',
        border: 'none',
        transform: 'translateY(-5%)'
      }
    },
    advantages: {
      maxWidth: 288,
      padding: [4, 16],
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'start',
      gap: 16,
      ...typography.sizes.body.small
    },
    supportingText: {
      wordBreak: 'break-all'
    },
    limits: {
      marginLeft: 'auto',
      wordBreak: 'keep-all'
    }
  })
);
