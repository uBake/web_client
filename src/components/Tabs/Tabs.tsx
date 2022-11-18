import { FC, useEffect, useState } from 'react';

import { useStyles } from './styles';
import { Tab, TabData } from './Tab/Tab';

interface TabsProps extends HTMLDivElement {
  tabs: TabData[];
  onTabSelect: (id: string) => void;
  selectedId: string;
}

export const Tabs: FC<TabsProps> = ({ tabs = [], onTabSelect, selectedId }) => {
  const [selectedTabId, setSelectedTabId] = useState<string>(selectedId);
  const selectHandler = (tabId: string) => {
    setSelectedTabId(tabId);
    onTabSelect && onTabSelect(tabId);
  };
  useEffect(() => {
    if (selectedId && selectedId.length > 0) {
      selectHandler(selectedId);
    } else {
      selectHandler(tabs[0].id);
    }
  }, []);

  const styles = useStyles();

  return (
    <div className={styles.tabs}>
      {tabs.map(({ id, ...props }) => {
        const selected = selectedTabId === id;
        return (
          <Tab
            selected={selected}
            onTabSelect={selectHandler}
            key={id}
            id={id}
            {...props}
          />
        );
      })}
    </div>
  );
};
