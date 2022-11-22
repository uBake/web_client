import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { useStyles } from './styles';

export type VerticalAligns = 'top' | 'bottom';

export type HorizontalAlign = 'left' | 'right';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  count?: number;
  vPos?: VerticalAligns;
  hPos?: HorizontalAlign;
}

export const Badge: FC<BadgeProps> = ({
  hPos = 'right',
  vPos = 'top',
  count,
  children
}) => {
  const styles = useStyles({ count, hPos });

  return (
    <div className={styles.wrapper}>
      {count && (
        <p className={clsx(styles.badge, styles[hPos], styles[vPos])}>
          {count > 1 && count}
        </p>
      )}
      {children}
    </div>
  );
};
