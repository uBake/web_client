import { FC, HTMLAttributes } from 'react';

import { DropDownItem, DropDownItemData } from './DropDownItem/DropDownItem';
import { useStyles } from './styles';

export interface DropDownProps extends HTMLAttributes<HTMLHRElement> {
  items: DropDownItemData[];
  onChoose: (id: string) => void;
}

export const DropDown: FC<DropDownProps> = ({ items, onChoose, ...props }) => {
  const styles = useStyles();

  return (
    <div className={styles.dropdown}>
      {items?.map(item => (
        <DropDownItem onChoose={onChoose} {...item} key={item.id} />
      ))}
    </div>
  );
};
