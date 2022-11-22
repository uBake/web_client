import { FC, HTMLAttributes } from 'react';

import { Button, IconButtonProps } from '../../buttons/Button/Button';
import { FloatingActionButton, FloatingActionButtonProps } from '../../buttons/FloatingActionButton/FloatingActionButton';
import { NavigationDrawerItem, NavigationDrawerItemProps } from './NavigationDrawerItem/NavigationDrawerItem';
import { useStyles } from './styles';

export interface NavigationDrawerProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  iconButton?: IconButtonProps;
  fab?: FloatingActionButtonProps;
  items: NavigationDrawerItemProps[];
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({
  title,
  subtitle,
  items,
  iconButton,
  fab
}) => {
  const styles = useStyles();
  return (
    <nav className={styles.drawer}>
      {(title || subtitle || iconButton || fab) && (
        <div className={styles.head}>
          {iconButton && (
            <div className={styles.iconWrapper}>
              <Button
                variant='ghost'
                className={styles.button}
                {...iconButton}
              />
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
