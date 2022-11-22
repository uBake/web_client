import { FC, HTMLAttributes } from 'react';

import { useStyles } from './styles';

export interface TabData extends HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
}

export interface TabProps extends TabData {
  selected: boolean;
  onTabSelect: (id: string) => void;
}

export const Tab: FC<TabProps> = ({ id, title, selected, onTabSelect }) => {
  const styles = useStyles({ selected });

  return (
    <div className={styles.wrapper} onClick={() => onTabSelect(id)}>
      <div className={styles.tab}>
        <span className={styles.title}>{title}</span>
        <span className={styles.border}></span>
      </div>
    </div>
  );
};
