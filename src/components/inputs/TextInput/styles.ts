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
      background: palette.surface
    },
    placeholder: {
      position: 'absolute',
      top: '50%',
      left: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      transform: 'translateY(-50%)'
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
