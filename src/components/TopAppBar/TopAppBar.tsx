import { FC, HTMLAttributes } from 'react';

import { Button, IconButtonProps } from '../buttons/Button/Button';
import { CustomImageProps } from '../Image/Image';
import { TabProps } from '../Tabs/Tab/Tab';
import { Tabs } from '../Tabs/Tabs';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarNavigation } from '../Toolbar/ToolbarNavigation/ToolbarNavigation';
import { useStyles } from './styles';

export type TopAppBarSize = 'standard' | 'medium' | 'large';

export interface TopAppBarProps extends HTMLAttributes<HTMLDivElement> {
  onTabSelect?: (id: string) => void;
  size?: TopAppBarSize;
  tabs?: TabProps[];
  iconButton?: IconButtonProps;
  title?: string;
  subtitle?: string;
  image?: CustomImageProps;
  navigationItems?: IconButtonProps[];
}

export const TopAppBar: FC<TopAppBarProps> = ({
  onTabSelect,
  size = 'standard',
  tabs,
  iconButton,
  title,
  subtitle,
  image,
  navigationItems
}) => {
  const styles = useStyles({ size });

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        {iconButton && size !== 'standard' && (
          <Button
            variant='ghost'
            className={styles.iconButton}
            iconSize={24}
            {...iconButton}
          />
        )}
        <Toolbar
          iconButton={
            size === 'standard' && iconButton ? iconButton : undefined
          }
          title={title}
          subtitle={subtitle}
          image={image}
          navigationItems={
            size === 'standard' && navigationItems ? navigationItems : undefined
          }
          className={styles.title}
        />
        {navigationItems && size !== 'standard' && (
          <ToolbarNavigation
            className={styles.rightPart}
            items={navigationItems}
          />
        )}
      </div>
      {tabs && (
        <Tabs
          selectedId={tabs[0].id}
          onTabSelect={onTabSelect}
          className={styles.tabs}
          tabs={tabs}
        />
      )}
    </div>
  );
};
