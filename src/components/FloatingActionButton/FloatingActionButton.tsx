import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import { Icon, IconVariant } from '../Icon/Icon';
import { useStyles } from './styles';

export type FloatingActionVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'surface';
export type FloatingActionSizes = 'small' | 'medium' | 'large' | 'extended';

export interface FloatingActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: FloatingActionVariants;
  size?: FloatingActionSizes;
  text?: string;
  icon?: IconVariant;
}

export const FloatingActionButton: FC<FloatingActionButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  text,
  icon,
  disabled,
  ...props
}) => {
  const styles = useStyles();

  return (
    <button
      className={clsx([styles.button, styles[size], styles[variant]])}
      disabled={disabled}
      {...props}
    >
      {icon && <Icon className={styles.icon} size={24} icon={icon} />}
      {size === 'extended' && text && (
        <span className={styles.text}>{text}</span>
      )}
    </button>
  );
};
