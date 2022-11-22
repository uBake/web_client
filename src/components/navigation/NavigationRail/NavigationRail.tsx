import { FC, HTMLAttributes } from 'react';

import { Button, IconButtonProps } from '../../buttons/Button/Button';
import { FloatingActionButton, FloatingActionButtonProps } from '../../buttons/FloatingActionButton/FloatingActionButton';
import { NavigationRailItem, NavigationRailItemProps } from './NavigationRailItem/NavigationRailItem';
import { useStyles } from './styles';

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
              <Button
                variant='ghost'
                className={styles.button}
                {...iconButton}
              />
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
