import { FC } from 'react';

import { FlexDirections } from '../../../../types';
import { Button, ButtonProps } from '../../Button/Button';
import { useStyles } from './styles';

export interface SegmentedButtonProps extends ButtonProps {
  btnsDirection: FlexDirections;
  selected: boolean;
  onItemSelect: (id: string) => void;
}

export const SegmentedButton: FC<SegmentedButtonProps> = ({
  btnsDirection,
  ...props
}) => {
  const styles = useStyles({ btnsDirection });
  return (
    <Button variant='outlined' className={styles.segmentedButton} {...props} />
  );
};
