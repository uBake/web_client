import clsx from 'clsx';
import { FC } from 'react';

import { ButtonProps } from '../Button/Button';
import { useStyles } from './styles';

export type FloatingActionVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'surface';
export type FloatingActionSizes = 'small' | 'medium' | 'large' | 'extended';

export interface FloatingActionButtonProps
  extends Omit<ButtonProps, 'variant' | 'direction'> {
  variant?: FloatingActionVariants;
  size?: FloatingActionSizes;
}

export const FloatingActionButton: FC<FloatingActionButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  label,
  icon,
  disabled,
  className,
  ...props
}) => {
  const styles = useStyles();

  return (
    <button
      className={clsx([
        styles.button,
        styles[size],
        styles[variant],
        className
      ])}
      disabled={disabled}
      {...props}
    >
      {icon && <Icon className={styles.icon} size={24} icon={icon} />}
      {size === 'extended' && label && (
        <span className={styles.label}>{label}</span>
      )}
    </button>
  );
};
