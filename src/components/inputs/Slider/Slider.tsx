import { FC, useState } from 'react';

import { InputProps } from '..';
import { Tooltip } from '../../Tooltip/Tooltip';
import { useStyles } from './styles';

export interface SliderProps extends InputProps {
  value: number;
  min: number;
  max: number;
  width: number;
}

const getOffset = (value: number, min: number, max: number, width: number) =>
  ((value - min) / (max - min)) * (width - 20);

export const Slider: FC<SliderProps> = ({
  value,
  onChange,
  min,
  max,
  width = 200,
  ...props
}) => {
  const [currValue, setCurrValue] = useState<number>(value);
  const styles = useStyles({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrValue(Number(e.target.value));
    onChange && onChange(e);
  };

  return (
    <div style={{ width }} className={styles.wrapper}>
      <Tooltip
        className={styles.thumbWrapper}
        position='top'
        style={{ left: getOffset(currValue, min, max, width) }}
        text={currValue.toString()}
      />
      <div
        style={{ width: getOffset(currValue, min, max, width) }}
        className={styles.progress}
      ></div>
      <input
        type='range'
        className={styles.range}
        min={min}
        max={max}
        value={currValue}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};
