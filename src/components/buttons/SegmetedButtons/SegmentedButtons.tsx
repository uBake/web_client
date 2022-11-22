import { FC } from 'react';

import { FlexDirections } from '../../../types';
import { ButtonProps } from '../Button/Button';
import { SegmentedButton } from './SegmentedButton/SegmentedButton';
import { useStyles } from './styles';

export interface SegmentedButtonsProps {
  btns?: ButtonProps[];
  direction?: FlexDirections;
}

export const SegmentedButtons: FC<SegmentedButtonsProps> = ({
  btns,
  direction = 'row'
}) => {
  const styles = useStyles({ direction });

  return (
    <div className={styles.segmentedButtons}>
      {btns &&
        btns.map(btn => (
          <SegmentedButton btnsDirection={direction} key={btn.id} {...btn} />
        ))}
    </div>
  );
};
