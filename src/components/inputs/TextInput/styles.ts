import { createUseStyles } from 'react-jss';


export const useStyles = createUseStyles(({ borderRadius, typography, palette }) => ({
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
    border: {
      width: ({ currValue }: { currValue?: string | number }) =>
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
  placeholder: {
    position: 'absolute',
    top: ({ currValue }: { currValue?: string | number }) =>
      currValue && currValue.toString().length ? 0 : '50%',
    left: ({ currValue }: { currValue?: string | number }) =>
      currValue && currValue.toString().length ? 12 : 16,
    paddingLeft: ({ currValue }: { currValue?: string | number }) =>
      currValue && currValue.toString().length ? 4 : 0,
    paddingRight: ({ currValue }: { currValue?: string | number }) =>
      currValue && currValue.toString().length ? 4 : 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    fontSize: ({ currValue }: { currValue?: string | number }) =>
      currValue && currValue.toString().length ? 12 : 'inherit',
    lineHeight: ({ currValue }: { currValue?: string | number }) =>
      currValue && currValue.toString().length ? '16px' : 'inherit',
    letterSpacing: ({ currValue }: { currValue?: string | number }) =>
      currValue && currValue.toString().length ? 0.4 : 'inherit'
  },
  placeholderBg: {
    position: 'absolute',
    top: '50%',
    left: 0,
    margin: 0,
    zIndex: -1,
    width: '100%',
    height: 3,
    background: ({ currValue }: { currValue?: string | number }) =>
      currValue && currValue.toString().length
        ? palette.surface
        : 'transparent',
    border: 'none',
    transform: 'translateY(-5%)',
    borderTopLeftRadius: ({ currValue }: { currValue?: string | number }) =>
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
}));