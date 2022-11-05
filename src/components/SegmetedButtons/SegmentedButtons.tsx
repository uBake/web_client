import { FC } from 'react';

import { SegmentedButton, SegmentedButtonProps } from './SegmentedButton/SegmentedButton';
import { useStyles } from './styles';

export const SegmentedButtons: FC<SegmentedButtonsProps> = ({ btns, direction = 'horizontal' }) => {
  const styles = useStyles({ direction });

  return (
    <div className={styles.segmentedButtons}>
      {btns.map(btn => (
        <SegmentedButton {...btn} direction={direction} key={btn.id} />
      ))}
    </div>
  );
};

export type Direction = 'vertical' | 'horizontal';

export interface SegmentedButtonsProps {
  btns: SegmentedButtonProps[];
  direction?: Direction;
}
