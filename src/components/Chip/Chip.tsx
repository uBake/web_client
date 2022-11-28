import clsx from 'clsx';
import { FC, HTMLAttributes, useState } from 'react';

import { Icon, IconVariant } from '../Icon/Icon';
import { Image } from '../Image/Image';
import { useStyles } from './styles';

export type ChipVariants = 'outlined' | 'elevated';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  avatar?: string;
  disabled?: boolean;
  icon?: IconVariant;
  label: string;
  name?: string;
  onChoose?: (selected: boolean) => void;
  onClose?: () => void;
  variant?: ChipVariants;
  withCheck?: boolean;
}

export const Chip: FC<ChipProps> = ({
  active = false,
  avatar,
  disabled,
  icon,
  id = 'chip',
  label,
  name = 'chip',
  onChoose,
  onClose,
  variant = 'outlined',
  withCheck,
  ...props
}) => {
  const styles = useStyles();
  const [checked, setChecked] = useState(active);

  const handleSelect = () => {
    if (disabled) return;
    onChoose && onChoose(checked);
    setChecked(!checked);
  };

  return (
    <div
      className={clsx(styles.wrapper, styles[variant], {
        [styles.active]: !disabled && checked,
        [styles.disabled]: disabled
      })}
      {...props}
    >
      <input
        type='checkbox'
        onChange={handleSelect}
        className={styles.input}
        name={name}
        id={id}
      />
      {avatar && (
        <Image
          width={18}
          variant='avatar'
          src={avatar}
          alt={label}
          className={styles.avatar}
          unoptimized
        />
      )}
      {icon && (
        <div className={styles.leftIcon}>
          <Icon icon={icon} className={styles.icon} size={18} />
        </div>
      )}
      {withCheck && checked && (
        <div className={clsx(styles.checkWrapper, styles.leftIcon)}>
          <Icon className={styles.check} size={18} icon='Done' />
        </div>
      )}
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {onClose && (
        <div className={styles.rightIcon}>
          <Icon
            className={styles.icon}
            icon='Close'
            size={18}
            onClick={onClose}
          />
        </div>
      )}
    </div>
  );
};
