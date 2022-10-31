import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { useStyles } from './styles';

export type ButtonVariants =
  | 'filled'
  | 'tonal'
  | 'outlined'
  | 'elevated'
  | 'ghost';

export interface ButtonProps extends PropsWithChildren {
  disabled: boolean;
  variant: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  variant = 'filled',
  ...props
}) => {
  const styles = useStyles();

  return (
    <button disabled={disabled} className={classNames([styles.button, styles[variant]])} {...props}>
      {children}
    </button>
  );
};
