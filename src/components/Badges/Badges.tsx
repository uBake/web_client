import { FC, PropsWithChildren } from 'react';

import { useStyles } from './styles';

export interface BadgeProps extends PropsWithChildren {
  count?: number;
}

export const Badge: FC<BadgeProps> = ({ children, count }) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <p className={styles.badge}>{count}</p>
      {children}
    </div>
  );
};
