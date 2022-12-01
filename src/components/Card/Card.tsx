import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { useStyles } from './styles';

export type CardVariant = 'outlined' | 'elevated' | 'filled';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  head: string;
  title: string;
  variant?: CardVariant;
}

export const Card: FC<CardProps> = ({
  head,
  title,
  variant = 'outlined',
  className,
  children,
  ...props
}) => {
  const styles = useStyles();

  return (
    <div className={clsx(styles.card, styles[variant], className)} {...props}>
      {children}
    </div>
  );
};
