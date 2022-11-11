import { FC } from 'react';

import { FlexDirections } from '../../types';
import { SegmentedButton } from './SegmentedButton/SegmentedButton';
import { useStyles } from './styles';

export const SegmentedButtons: FC<SegmentedButtonsProps> = ({
  btns,
  direction = 'row'
}) => {
  const styles = useStyles({ direction });

  return (
    <div className={styles.segmentedButtons}>
      {btns.map(btn => (
        <SegmentedButton btnsDirection={direction} key={btn.id} {...btn} />
      ))}
    </div>
  );
};

export interface SegmentedButtonsProps {
  btns: SegmentedButton[];
  direction?: FlexDirections;
}
