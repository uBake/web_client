import { FC, HTMLAttributes } from 'react';

import { TabProps } from '../Tabs/Tab/Tab';
import { Tabs } from '../Tabs/Tabs';
import { useStyles } from './styles';

export type TopAppBarSize = 'standard' | 'medium' | 'large';

export interface TopAppBarProps extends HTMLAttributes<HTMLDivElement> {
  leftPart?: JSX.Element;
  onTabSelect: (id: string) => void;
  rightPart?: JSX.Element[];
  size?: TopAppBarSize;
  tabs?: TabProps[];
  title: string;
}

export const TopAppBar: FC<TopAppBarProps> = ({
  leftPart,
  onTabSelect,
  rightPart,
  size = 'standard',
  tabs,
  title = 'Title'
}) => {
  const styles = useStyles({ size });

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        {leftPart && <div className={styles.leftPart}>{leftPart}</div>}
        <h2 className={styles.title}>{title}</h2>
        {rightPart && (
          <div className={styles.rightPart}>
            {rightPart.map((El: JSX.Element, id: number) => (
              <div key={id}>{El}</div>
            ))}
          </div>
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
