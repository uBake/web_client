import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

import { FlexDirections } from '../../types';
import { useStyles } from './styles';

type ButtonVariants = 'filled' | 'tonal' | 'outlined' | 'elevated' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  className,
  ...props
}) => {
  const styles = useStyles({ disabled, direction, variant });

  return (
    <button
      disabled={disabled}
      className={classNames(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
