import { DefaultTheme } from 'react-jss';

import { aspectRatio } from './aspectRatio';
import { borderRadius } from './borderRadius';
import { opacity } from './opacity';
import { shadows } from './shadows';
import { typography } from './typography';
import { zIndex } from './zIndex';

export const defaultTheme: Pick<
  DefaultTheme,
  | 'shadows'
  | 'zIndex'
  | 'borderRadius'
  | 'aspectRatio'
  | 'typography'
  | 'opacity'
> = {
  shadows,
  zIndex,
  borderRadius,
  aspectRatio,
  typography,
  opacity
};
