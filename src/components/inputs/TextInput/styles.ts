import { createUseStyles } from 'react-jss';

import { InputProps } from '..';

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
      border: `1px solid ${palette.outline}`,
      font: 'inherit',
      background: palette.surface,
      color: palette.onSurface,
      '&:focus': {
        outline: 'none',
        borderWidth: 2,
        '&+label': {
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
      top: ({ value }: InputProps) =>
        value && value.toString().length ? 0 : '50%',
      left: ({ value }: InputProps) =>
        value && value.toString().length ? 12 : 16,
      paddingLeft: ({ value }: InputProps) =>
        value && value.toString().length ? 4 : 0,
      paddingRight: ({ value }: InputProps) =>
        value && value.toString().length ? 4 : 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      fontSize: ({ value }: InputProps) =>
        value && value.toString().length
          ? typography.sizes.body.small.fontSize
          : 'inherit',
      lineHeight: ({ value }: InputProps) =>
        value && value.toString().length
          ? typography.sizes.body.small.lineHeight
          : 'inherit',
      letterSpacing: ({ value }: InputProps) =>
        value && value.toString().length
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
      background: ({ value }: InputProps) =>
        value && value.toString().length ? palette.surface : 'transparent',
      border: 'none',
      transform: 'translateY(-5%)',
      borderTopLeftRadius: ({ value }: InputProps) =>
        value && value.toString().length ? '20%' : 0
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
