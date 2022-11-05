import { FC, ReactNode } from 'react';

import { FlexDirections } from '../../../types';
import { Button } from '../../Button/Button';
import { useStyles } from './styles';

export const SegmentedButton: FC<SegmentedButtonProps> = ({ btnsDirection, label, onClick , direction, selected }) => {
  const styles = useStyles({ btnsDirection });
  return (
    <Button variant='outlined' className={styles.segmentedButton}>
      {label}
    </Button>
  );
};

export interface SegmentedButtonProps extends SegmentedButton {
  btnsDirection: FlexDirections;
}

export interface SegmentedButton {
  id: number;
  direction: FlexDirections;
  label: string | ReactNode;
  selected: boolean;
  onClick: () => void;
}
