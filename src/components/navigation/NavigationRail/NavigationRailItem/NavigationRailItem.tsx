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
  onItemClick?: (id: string) => void;
}

export const NavigationRailItem: FC<NavigationRailItemProps> = ({
  id,
  icon,
  active,
  disabled,
  onItemClick
}) => {
  const styles = useStyles();
  const handleClick = () => {
    if (onItemClick && !disabled) {
      onItemClick(id);
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
