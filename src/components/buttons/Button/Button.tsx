import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import { FlexDirections } from '../../../types';
import { IconVariant } from '../../Icon/Icon';
import { useStyles } from './styles';

type ButtonVariants = 'filled' | 'tonal' | 'outlined' | 'elevated' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconVariant;
  iconSize?: number;
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
  iconSize = 18,
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
      {children}
      {icon && <Icon size={iconSize} className={styles.icon} icon={icon} />}
      {label && <span>{label}</span>}
    </button>
  );
};
