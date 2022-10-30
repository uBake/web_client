import { PropsWithChildren } from 'react';

import { useStyles } from './styles';

export interface ContainerProps extends PropsWithChildren {}

export const Container = ({ children }: ContainerProps) => {
  const styles = useStyles();
  return <div className={styles.container}>{children}</div>;
};
