import { createUseStyles } from 'react-jss';

import { ButtonProps } from './Button';

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
    padding: [10, 24],
    flexDirection: ({ direction }: ButtonProps) => direction
  },
  filled: {
    background: palette.primary,
    color: palette.onPrimary,
    '&:hover': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&:active': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&[disabled]': {
      color: palette.onSurface,
      background: palette.primaryContainer[100]
    }
  },
  tonal: {
    background: palette.primaryContainer,
    color: palette.onPrimaryContainer,
    '&:hover': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&:active': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&[disabled]': {
      color: palette.onSurface,
      background: palette.primaryContainer[100]
    }
  },
  outlined: {
    background: 'transparent',
    border: [1, 'solid', palette.outline],
    color: palette.primary,
    '&:hover': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&:active': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&[disabled]': {
      color: palette.onSurface,
      background: palette.primaryContainer[100]
    }
  },
  elevated: {
    background: palette.surface1,
    color: palette.primary,
    '&:hover': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&:active': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&[disabled]': {
      color: palette.onSurface,
      background: palette.primaryContainer[100]
    }
  },
  ghost: {
    background: 'white',
    color: palette.primary,
    '&:hover': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&:active': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&[disabled]': {
      color: palette.onSurface,
      background: palette.primaryContainer[100]
    }
  }
}));
