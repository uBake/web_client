import clsx from 'clsx';
import { FC, LiHTMLAttributes } from 'react';

import { Badge } from '../../../Badge/Badge';
import { IconVariant } from '../../../Icon/Icon';
import { useStyles } from './styles';

export interface NavigationRailItemProps
  extends LiHTMLAttributes<HTMLLIElement> {
  id: string;
  icon: IconVariant;
  meta?: number;
  active?: boolean;
  disabled?: boolean;
  onItemClick?: (id: string) => void;
}

export const NavigationRailItem: FC<NavigationRailItemProps> = ({
  id,
  icon,
  meta,
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
      <Badge count={meta}>
        <Icon className={styles.icon} icon={icon} size={24} />
      </Badge>
    </li>
  );
};
