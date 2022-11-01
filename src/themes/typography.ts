import { FontWeights, Typography, TypographySizes } from '../types';

const fontWeights: FontWeights = {
  400: {
    fontWeight: 400
  },
  500: {
    fontWeight: 500
  },
  700: {
    fontWeight: 700
  }
};

const fontSizes: TypographySizes = {
  display: {
    large: {
      fontSize: 57,
      lineHeight: '64px',
      letterSpacing: -0.25
    },
    medium: {
      fontSize: 45,
      lineHeight: '52px'
    },
    small: {
      fontSize: 36,
      lineHeight: '34px'
    }
  },
  headline: {
    large: {
      fontSize: 32,
      lineHeight: '40px'
    },
    medium: {
      fontSize: 28,
      lineHeight: '36px'
    },
    small: {
      fontSize: 24,
      lineHeight: '32px'
    }
  },
  title: {
    large: {
      fontSize: 22,
      lineHeight: '28px'
    },
    medium: {
      fontSize: 16,
      lineHeight: '24px',
      ...fontWeights[500]
    },
    small: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0.1,
      ...fontWeights[500]
    }
  },
  label: {
    large: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0.1,
      ...fontWeights[500]
    },
    medium: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0.5,
      ...fontWeights[500]
    },
    small: {
      fontSize: 11,
      lineHeight: '16px',
      letterSpacing: 0.1,
      ...fontWeights[500]
    }
  },
  body: {
    large: {
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: 0.5
    },
    medium: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0.25
    },
    small: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0.4
    }
  }
};

export const typography: Typography = {
  weights: fontWeights,
  sizes: fontSizes
};
