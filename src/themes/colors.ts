import { Colors } from '../types';

const primary = {
  0: '#000000',
  10: '#3E0021',
  20: '#5D1138',
  30: '#7A294F',
  40: '#974067',
  50: '#B55980',
  60: '#D3729A',
  70: '#F28BB5',
  80: '#FFB0CD',
  90: '#FFD9E4',
  95: '#FFECF0',
  99: '#FFFBFF',
  100: '#FFFFFF'
};

const secondary = {
  0: '#000000',
  10: '#0D0664',
  20: '#252478',
  30: '#3C3D8F',
  40: '#5455A9',
  50: '#6D6EC4',
  60: '#8788DF',
  70: '#A2A3FC',
  80: '#C1C1FF',
  90: '#E1DFFF',
  95: '#F2EFFF',
  99: '#FFFBFF',
  100: '#FFFFFF'
};

const tertiary = {
  0: '#000000',
  10: '#2F1500',
  20: '#4E2600',
  30: '#6F3900',
  40: '#914C00',
  50: '#B16317',
  60: '#D17C30',
  70: '#F09648',
  80: '#FFB77F',
  90: '#FFDCC3',
  95: '#FFEDE3',
  99: '#FFFBFF',
  100: '#FFFFFF'
};

const error = {
  0: '#000000',
  10: '#410002',
  20: '#690005',
  30: '#93000A',
  40: '#BA1A1A',
  50: '#DE3730',
  60: '#FF5449',
  70: '#FF897D',
  80: '#FFB4AB',
  90: '#FFDAD6',
  95: '#FFEDEA',
  99: '#FFFBFF',
  100: '#FFFFFF'
};

const neutral = {
  0: '#000000',
  10: '#3D0023',
  20: '#5D1139',
  30: '#792950',
  40: '#964169',
  50: '#B45982',
  60: '#D2729C',
  70: '#F18BB7',
  80: '#FFB0CF',
  90: '#FFD9E5',
  95: '#FFECF1',
  99: '#FFFBFF',
  100: '#FFFFFF'
};

const neutralVariant = {
  0: '#000000',
  10: '#23191C',
  20: '#392D31',
  30: '#514347',
  40: '#695B5F',
  50: '#837377',
  60: '#9D8C91',
  70: '#B9A7AB',
  80: '#D5C2C7',
  90: '#F2DDE2',
  95: '#FFECF0',
  99: '#FFFBFF',
  100: '#FFFFFF'
};

const lightSurfaces = {
  0: neutral[99],
  1: `linear-gradient(${primary[40]}0D, ${primary[40]}0D), ${neutral[99]}`,
  2: `linear-gradient(${primary[40]}14, ${primary[40]}14), ${neutral[99]}`,
  3: `linear-gradient(${primary[40]}1C, ${primary[40]}1C), ${neutral[99]}`,
  4: `linear-gradient(${primary[40]}1E, ${primary[40]}1E), ${neutral[99]}`,
  5: `linear-gradient(${primary[40]}23, ${primary[40]}23), ${neutral[99]}`
};

const darkSurfaces = {
  0: neutral[10],
  1: `linear-gradient(${primary[80]}0D, ${primary[80]}0D), ${neutral[10]}`,
  2: `linear-gradient(${primary[80]}14, ${primary[80]}14), ${neutral[10]}`,
  3: `linear-gradient(${primary[80]}1C, ${primary[80]}1C), ${neutral[10]}`,
  4: `linear-gradient(${primary[80]}1E, ${primary[80]}1E), ${neutral[10]}`,
  5: `linear-gradient(${primary[80]}23, ${primary[80]}23), ${neutral[10]}`
};

export const colors: Colors = {
  primary,
  secondary,
  tertiary,
  error,
  neutral,
  neutralVariant,
  lightSurfaces,
  darkSurfaces
};
