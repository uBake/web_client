import { FC, HTMLAttributes } from 'react';

import { FloatingActionButton, FloatingActionButtonProps } from '../../FloatingActionButton/FloatingActionButton';
import { Icon, IconVariant } from '../../Icon/Icon';
import { NavigationDrawerItem, NavigationDrawerItemProps } from './NavigationDrawerItem/NavigationDrawerItem';
import { useStyles } from './styles';

export interface NavigationDrawerProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  icon?: IconVariant;
  fab?: FloatingActionButtonProps;
  items: NavigationDrawerItemProps[];
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({
  title,
  subtitle,
  items,
  icon,
  fab
}) => {
  const styles = useStyles();
  return (
    <nav className={styles.drawer}>
      {(title || subtitle || icon || fab) && (
        <div className={styles.head}>
          {icon && (
            <div className={styles.iconWrapper}>
              <Icon className={styles.icon} size={24} icon={icon} />
            </div>
          )}
          {(title || subtitle) && (
            <div className={styles.labels}>
              {title && <h3 className={styles.title}>{title}</h3>}
              {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            </div>
          )}
          {fab && (
            <FloatingActionButton variant='primary' size='extended' {...fab} />
          )}
        </div>
      )}
      <ul className={styles.body}>
        {items.map(item => (
          <NavigationDrawerItem key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};
