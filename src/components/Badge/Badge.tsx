import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { useStyles } from './styles';

export type VerticalAligns = 'top' | 'bottom';

export type HorizontalAlign = 'left' | 'right';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  count?: number | string;
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
      <p className={classNames(styles.badge, styles[hPos], styles[vPos])}>
        {count}
      </p>
      {children}
    </div>
  );
};
