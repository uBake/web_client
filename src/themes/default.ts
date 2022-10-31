import { Theme } from '../types.d';
import { aspectRatio } from './aspectRatio';
import { borderRadius } from './borderRadius';
import { shadows } from './shadows';
import { zIndex } from './zIndex';

export const defaultTheme: Pick<
  Theme,
  'shadows' | 'zIndex' | 'borderRadius' | 'aspectRatio'
> = {
  shadows,
  zIndex,
  borderRadius,
  aspectRatio
};
