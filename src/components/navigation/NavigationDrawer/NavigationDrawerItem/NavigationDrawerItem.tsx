import clsx from 'clsx';
import { FC, LiHTMLAttributes } from 'react';

import { Icon, IconVariant } from '../../../Icon/Icon';
import { useStyles } from './styles';

export interface NavigationDrawerItemProps
  extends LiHTMLAttributes<HTMLLIElement> {
  id: string;
  title: string;
  icon: IconVariant;
  meta: string;
  active?: boolean;
  disabled?: boolean;
  onActive?: (id: string) => void;
}

export const NavigationDrawerItem: FC<NavigationDrawerItemProps> = ({
  id,
  title,
  icon,
  meta,
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
    <div className={styles.wrapper}>
      <li
        className={clsx([
          styles.item,
          { [styles.active]: !disabled && active, [styles.disabled]: disabled }
        ])}
        onClick={handleClick}
      >
        {icon && <Icon className={styles.icon} icon={icon} size={24} />}
        {title && <span className={styles.title}>{title}</span>}
        {meta && <div className={styles.meta}>{meta}</div>}
      </li>
    </div>
  );
};
