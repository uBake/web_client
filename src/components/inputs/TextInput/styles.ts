import { createUseStyles } from 'react-jss';

interface StyleProps {
  currValue: string | ReadonlyArray<string> | number;
}

export const useStyles = createUseStyles(
  ({ borderRadius, typography, palette, opacity }) => ({
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
    disabled: {
      color: palette.onSurfaceVariant + opacity[38],
      '& input': {
        borderWidth: 1,
        borderColor: palette.onSurface + opacity[12],
        color: palette.onSurfaceVariant + opacity[38]
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
      border: {
        width: ({ currValue }: StyleProps) =>
          currValue && currValue.toString().length ? 2 : 1,
        style: 'solid',
        color: palette.outline
      },
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
            background: palette.surface,
            borderTopLeftRadius: '20%'
          }
        }
      }
    },
    label: {
      position: 'absolute',
      top: ({ currValue }: StyleProps) =>
        currValue && currValue.toString().length ? 0 : '50%',
      left: ({ currValue }: StyleProps) =>
        currValue && currValue.toString().length ? 12 : 16,
      paddingLeft: ({ currValue }: StyleProps) =>
        currValue && currValue.toString().length ? 4 : 0,
      paddingRight: ({ currValue }: StyleProps) =>
        currValue && currValue.toString().length ? 4 : 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      fontSize: ({ currValue }: StyleProps) =>
        currValue && currValue.toString().length
          ? typography.sizes.body.small.fontSize
          : 'inherit',
      lineHeight: ({ currValue }: StyleProps) =>
        currValue && currValue.toString().length
          ? typography.sizes.body.small.lineHeight
          : 'inherit',
      letterSpacing: ({ currValue }: StyleProps) =>
        currValue && currValue.toString().length
          ? typography.sizes.body.small.letterSpacing
          : 'inherit'
    },
    labelBg: {
      position: 'absolute',
      top: '50%',
      left: 0,
      margin: 0,
      zIndex: -1,
      width: '100%',
      height: 3,
      background: ({ currValue }: StyleProps) =>
        currValue && currValue.toString().length
          ? palette.surface
          : 'transparent',
      border: 'none',
      transform: 'translateY(-5%)',
      borderTopLeftRadius: ({ currValue }: StyleProps) =>
        currValue && currValue.toString().length ? '20%' : 0
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
