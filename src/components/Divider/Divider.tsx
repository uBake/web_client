import { FC } from 'react';

import { useStyles } from './styles';

type DividerDirection = 'vertical' | 'horizontal';
type DividerWeight = 'default' | 'heavy';

export interface DividerProps {
  direction?: DividerDirection;
  text?: string;
  weight?: DividerWeight;
}

export const Divider: FC<DividerProps> = ({
  direction = 'horizontal',
  text,
  weight = 'default'
}) => {
  const size = weight === 'default' ? 1 : 8;
  const styles = useStyles({ direction, size });

  return (
    <div className={styles.wrapper}>
      <hr className={styles.divider} />
      {text && direction === 'horizontal' && (
        <span className={styles.text}>{text}</span>
      )}
    </div>
  );
};
