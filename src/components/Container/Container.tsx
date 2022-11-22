import { HTMLAttributes } from 'react';

import { useStyles } from './styles';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container = ({ children }: ContainerProps) => {
  const styles = useStyles();
  return <div className={styles.container}>{children}</div>;
};
