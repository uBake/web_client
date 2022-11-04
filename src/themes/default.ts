import { Theme } from '../types.d';
import { aspectRatio } from './aspectRatio';
import { borderRadius } from './borderRadius';
import { opacity } from './opacity';
import { shadows } from './shadows';
import { typography } from './typography';
import { zIndex } from './zIndex';

export const defaultTheme: Pick<Theme, 'shadows' | 'zIndex' | 'borderRadius' | 'aspectRatio' | 'typography' | 'opacity'> = {
  shadows,
  zIndex,
  borderRadius,
  aspectRatio,
  typography,
  opacity
};
