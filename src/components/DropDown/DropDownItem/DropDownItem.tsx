import { FC, HTMLAttributes } from 'react';

import { Divider } from '../../Divider/Divider';
import { Icon, IconVariant } from '../../Icon/Icon';
import { useStyles } from './styles';

export interface DropDownItemData extends HTMLAttributes<HTMLHRElement> {
  arrow?: boolean;
  divider?: boolean;
  id: string;
  metadata?: string;
  startSlot?: IconVariant | 'inset';
  title: string;
}

type DropDownItemProps = DropDownItemData & {
  onChoose: (id: string) => void;
};

export const DropDownItem: FC<DropDownItemProps> = ({
  arrow,
  divider,
  id,
  metadata,
  startSlot,
  title,
  onChoose,
  ...props
}) => {
  const styles = useStyles();
  const onClickHandler = () => {
    onChoose(id);
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={onClickHandler} className={styles.content} {...props}>
        {startSlot && (
          <div className={styles.iconSlot}>
            {startSlot !== 'inset' && <Icon icon={startSlot} />}
          </div>
        )}
        <p className={styles.title}>{title}</p>
        {metadata && <span className={styles.metadata}>{metadata}</span>}
        {arrow && (
          <div className={styles.iconSlot}>
            <Icon icon='ArrowFilled' />
          </div>
        )}
      </div>
      {divider && <Divider />}
    </div>
  );
};
