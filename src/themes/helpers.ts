import { Color } from '../types';

export const getGradientWithOpacity = (color: Color, opacity: string) =>
  `linear-gradient(${color}${opacity}, ${color}${opacity})`;
