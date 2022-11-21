import { DefaultTheme } from 'react-jss';

import { aspectRatio } from './aspectRatio';
import { borderRadius } from './borderRadius';
import { elevations } from './elevations';
import { opacity } from './opacity';
import { typography } from './typography';
import { zIndex } from './zIndex';

export const defaultTheme: Pick<
  DefaultTheme,
  | 'elevations'
  | 'zIndex'
  | 'borderRadius'
  | 'aspectRatio'
  | 'typography'
  | 'opacity'
> = {
  elevations,
  zIndex,
  borderRadius,
  aspectRatio,
  typography,
  opacity
};
