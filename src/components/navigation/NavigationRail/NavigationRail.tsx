import { FC, HTMLAttributes } from 'react';

import { Button, ButtonProps } from '../../Button/Button';
import { FloatingActionButton, FloatingActionButtonProps } from '../../FloatingActionButton/FloatingActionButton';
import { Icon, IconVariant } from '../../Icon/Icon';
import { NavigationRailItem, NavigationRailItemProps } from './NavigationRailItem/NavigationRailItem';
import { useStyles } from './styles';

interface IconButtonProps extends ButtonProps {
  icon: IconVariant;
}

export interface NavigationRailProps extends HTMLAttributes<HTMLElement> {
  iconButton?: IconButtonProps;
  fab?: FloatingActionButtonProps;
  items: NavigationRailItemProps[];
}

export const NavigationRail: FC<NavigationRailProps> = ({
  items,
  iconButton,
  fab
}) => {
  const styles = useStyles();

  return (
    <nav className={styles.rail}>
      {(fab || iconButton) && (
        <div className={styles.head}>
          {iconButton && (
            <div className={styles.iconWrapper}>
              <Button variant='ghost' className={styles.button} {...iconButton}>
                <Icon
                  className={styles.icon}
                  size={24}
                  icon={iconButton.icon}
                />
              </Button>
            </div>
          )}
          {fab && (
            <FloatingActionButton variant='tertiary' size='medium' {...fab} />
          )}
        </div>
      )}
      <ul className={styles.body}>
        {items.map(item => (
          <NavigationRailItem key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};
