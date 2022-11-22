import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import { FlexDirections } from '../../../types';
import { Icon, IconVariant } from '../../Icon/Icon';
import { useStyles } from './styles';

type ButtonVariants = 'filled' | 'tonal' | 'outlined' | 'elevated' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconVariant;
  label?: string;
  disabled?: boolean;
  variant?: ButtonVariants;
  direction?: FlexDirections;
  className?: string;
}

export interface IconButtonProps extends ButtonProps {
  icon: IconVariant;
}

export const Button: FC<ButtonProps> = ({
  children,
  icon,
  label,
  disabled = false,
  variant = 'filled',
  direction = 'row',
  className,
  ...props
}) => {
  const styles = useStyles({ label, icon, disabled, direction, variant });

  return (
    <button
      disabled={disabled}
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {children && children}
      {icon && <Icon className={styles.icon} icon={icon} />}
      {label && <span>{label}</span>}
    </button>
  );
};
