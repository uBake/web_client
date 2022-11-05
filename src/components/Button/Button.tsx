import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { FlexDirections } from '../../types';
import { useStyles } from './styles';

type ButtonVariants = 'filled' | 'tonal' | 'outlined' | 'elevated' | 'ghost';

export interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  variant?: ButtonVariants;
  direction?: FlexDirections;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  variant = 'filled',
  direction = 'row',
  className
}) => {
  const styles = useStyles({ disabled, direction, variant });

  return (
    <button disabled={disabled} className={classNames(styles.button, styles[variant], className)}>
      {children}
    </button>
  );
};
