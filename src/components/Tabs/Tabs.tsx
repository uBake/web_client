import clsx from 'clsx';
import { FC, HTMLAttributes, useCallback, useEffect, useState } from 'react';

import { useStyles } from './styles';
import { Tab, TabData } from './Tab/Tab';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  onTabSelect?: (id: string) => void;
  selectedId: string;
  tabs: TabData[];
}

export const Tabs: FC<TabsProps> = ({
  className,
  onTabSelect,
  selectedId,
  tabs = [],
  ...props
}) => {
  const [selectedTabId, setSelectedTabId] = useState<string>(selectedId);
  const selectHandler = useCallback(
    (tabId: string) => {
      setSelectedTabId(tabId);
      onTabSelect && onTabSelect(tabId);
    },
    [onTabSelect]
  );

  useEffect(() => {
    if (selectedId && selectedId.length > 0) {
      selectHandler(selectedId);
    } else {
      selectHandler(tabs[0].id);
    }
  }, [selectHandler, selectedId, tabs]);

  const styles = useStyles();

  return (
    <div className={clsx(styles.tabs, className)} {...props}>
      {tabs.map(({ id, ...tabProps }) => {
        const selected = selectedTabId === id;
        return (
          <Tab
            selected={selected}
            onTabSelect={selectHandler}
            key={id}
            id={id}
            {...tabProps}
          />
        );
      })}
    </div>
  );
};
