import { FC, HTMLAttributes } from 'react';

import { Button, IconButtonProps } from '../../buttons/Button/Button';
import { useStyles } from './styles';

export interface ToolbarNavigationProps extends HTMLAttributes<HTMLDivElement> {
  items: IconButtonProps[];
}

export const ToolbarNavigation: FC<ToolbarNavigationProps> = ({ items }) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      {items.map(item => (
        <div className={styles.iconButtonWrapper}>
          <Button
            variant='ghost'
            className={styles.iconButton}
            iconSize={24}
            {...item}
          />
        </div>
      ))}
    </div>
  );
};
