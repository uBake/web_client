import { FC, HTMLAttributes } from 'react';

import { Tabs, TabsProps } from '../Tabs/Tabs';
import { useStyles } from './styles';

type TopAppBarSize = 'standard' | 'medium' | 'large';

export interface TopAppBarProps extends HTMLAttributes<HTMLDivElement> {
  tabs: TabsProps;
  size: TopAppBarSize;
}

export const TopAppBar: FC<TopAppBarProps> = ({ tabs, size }) => {
  const styles = useStyles({ size });

  return <div className={styles.wrapper}>{tabs && <Tabs {...tabs} />}</div>;
};
