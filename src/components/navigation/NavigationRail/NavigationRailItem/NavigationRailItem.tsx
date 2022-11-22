import clsx from 'clsx';
import { FC, LiHTMLAttributes } from 'react';

import { Icon, IconVariant } from '../../../Icon/Icon';
import { useStyles } from './styles';

export interface NavigationRailItemProps
  extends LiHTMLAttributes<HTMLLIElement> {
  id: string;
  icon: IconVariant;
  active?: boolean;
  disabled?: boolean;
  onActive?: (id: string) => void;
}

export const NavigationRailItem: FC<NavigationRailItemProps> = ({
  id,
  icon,
  active,
  disabled,
  onActive
}) => {
  const styles = useStyles();
  const handleClick = () => {
    if (onActive && !disabled) {
      onActive(id);
    }
  };

  return (
    <li
      className={clsx([
        styles.item,
        { [styles.active]: !disabled && active, [styles.disabled]: disabled }
      ])}
      onClick={handleClick}
    >
      {icon && <Icon className={styles.icon} icon={icon} size={24} />}
    </li>
  );
};
