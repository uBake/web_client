import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ borderRadius, typography, palette }) => ({
    wrapper: {
      width: 'fit-content',
      color: palette.onSurfaceVariant
    },
    body: {
      position: 'relative',
      ...typography.sizes.title.medium,
      ...typography.weights[700]
    },
    textInput: {
      borderRadius: borderRadius.large,
      padding: 16,
      minWidth: 288,
      border: [1, 'solid', palette.outline],
      font: 'inherit',
      background: palette.surface,
      '&:focus': {
        outline: 'none',
        '&+span': {
          top: 2,
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
    supportingText: {},
    limits: {
      wordWrap: 'none'
    }
  })
);
