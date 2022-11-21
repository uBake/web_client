import { FC, HTMLAttributes } from 'react';

import { FloatingActionButton, FloatingActionButtonProps } from '../FloatingActionButton/FloatingActionButton';
import { Icon, IconVariant } from '../Icon/Icon';
import { NavigationItem, NavigationItemProps } from './NavigationItem/NavigationItem';
import { useStyles } from './styles';

export interface NavigationProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  icon?: IconVariant;
  fab?: FloatingActionButtonProps;
  items: NavigationItemProps[];
}

export const Navigation: FC<NavigationProps> = ({
  title,
  subtitle,
  items,
  icon,
  fab
}) => {
  const styles = useStyles();
  return (
    <nav className={styles.navigation}>
      {(title || subtitle) && (
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
          <NavigationItem {...item} />
        ))}
      </ul>
    </nav>
  );
};
