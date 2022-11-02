import { createUseStyles } from 'react-jss';



import { colors } from '../../themes/colors';
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
    flexDirection: ({ direction }: ButtonProps) => direction,
    cursor: 'pointer',
    '&[disabled]': {
      cursor: 'not-allowed'
    }
  },
  filled: {
    background: palette.primary,
    color: palette.onPrimary,
    '&:hover': {
      backgroundImage: `linear-gradient(${palette.onPrimary}0D, ${palette.onPrimary}0D)`,
      color: palette.onPrimary
    },
    '&:active': {
      backgroundImage: `linear-gradient(${palette.onPrimary}1E, ${palette.onPrimary}1E)`,
      color: palette.onPrimary
    },
    '&[disabled]': {
      background: `${palette.onSurface}1E`,
      color: `${palette.onSurface}5F`
    }
  },
  tonal: {
    background: palette.primaryContainer,
    color: palette.onPrimaryContainer,
    '&:hover': {
      backgroundImage: `linear-gradient(${colors.primary[10]}14, ${colors.primary[10]}14)`,
      color: palette.onPrimary
    },
    '&:active': {
      background: palette.primary,
      color: palette.onPrimary
    },
    '&[disabled]': {
      color: `${palette.onSurface}1E`,
      background: `${palette.onSurface}5F`
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