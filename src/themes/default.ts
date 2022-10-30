import { Theme } from '../types.d';
import { borderRadius } from './borderRadius';
import { shadows } from './shadows';
import { zIndex } from './zIndex';


export const defaultTheme: Pick<Theme, 'shadows' | 'zIndex' | 'borderRadius'> = {
  shadows,
  zIndex,
  borderRadius
};