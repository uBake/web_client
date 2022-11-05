import { FC, ReactNode } from 'react';

import { Direction } from '../SegmentedButtons';
import { useStyles } from './styles';

export const SegmentedButton: FC<SegmentedButtonProps> = ({ direction, label, onClick }) => {
  const styles = useStyles({ direction });
	console.log(direction, );
	

  return (
    <button className={styles.segmentedButton} onClick={onClick}>
      {label}
    </button>
  );
};

export interface SegmentedButtonProps {
  id: number;
  direction: Direction;
  label: string | ReactNode;
  selected: boolean;
  onClick: () => void;
}
