import { Color, Opacity } from '../types';

export const getGradientWithOpacity = (
  color: Color,
  opacity?: Opacity[keyof Opacity]
) => `linear-gradient(${color}${opacity}, ${color}${opacity})`;
