import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { Button, IconButtonProps } from '../buttons/Button/Button';
import { CustomImageProps } from '../Image/Image';
import { useStyles } from './styles';
import { ToolbarNavigation } from './ToolbarNavigation/ToolbarNavigation';
import { ToolbarTitle } from './ToolbarTitle/ToolbarTitle';

export interface ToolbarData {
  iconButton?: IconButtonProps;
  title?: string;
  subtitle?: string;
  image?: CustomImageProps;
  navigationItems?: IconButtonProps[];
}

export type ToolbarProps = HTMLAttributes<HTMLDivElement> & ToolbarData;

export const Toolbar: FC<ToolbarProps> = ({
  iconButton,
  title,
  subtitle,
  image,
  navigationItems,
  className,
  children
}) => {
  const styles = useStyles();

  return (
    <div className={clsx(styles.wrapper, className)}>
      {iconButton && (
        <div className={styles.iconButtonWrapper}>
          <Button
            iconSize={24}
            variant='ghost'
            className={styles.iconButton}
            {...iconButton}
          />
        </div>
      )}
      {(title || subtitle || image) && (
        <ToolbarTitle title={title} subtitle={subtitle} image={image} />
      )}
      {navigationItems && <ToolbarNavigation items={navigationItems} />}
      {children}
    </div>
  );
};
