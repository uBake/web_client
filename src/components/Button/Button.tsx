import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { useStyles } from './styles';

type ButtonVariants = 'filled' | 'tonal' | 'outlined' | 'elevated' | 'ghost';

type ButtonDirections = 'row' | 'column';

export interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  variant?: ButtonVariants;
  direction?: ButtonDirections;
}

export const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  variant = 'filled',
  direction = 'row'
}) => {
  const styles = useStyles({ disabled, direction, variant });

  return (
    <button disabled={disabled} className={classNames([styles.button, styles[variant]])}>
      {children}
    </button>
  );
};
