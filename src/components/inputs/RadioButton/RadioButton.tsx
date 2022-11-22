import clsx from 'clsx';
import { ChangeEvent, FC, useState } from 'react';

import { InputProps } from '..';
import { useStyles } from './styles';

export const RadioButton: FC<InputProps> = ({
  id = 'radio',
  className,
  onChange,
  checked,
  disabled,
  label,
  ...props
}) => {
  const styles = useStyles();
  const [isChecked, setIsChecked] = useState(checked);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange && onChange(e);
  };
  return (
    <label htmlFor={id} className={styles.wrapper}>
      <div
        className={clsx(styles.radio, {
          [styles.checked]: isChecked,
          [styles.disabled]: disabled
        })}
      >
        <input
          type='radio'
          className={clsx(styles.input, className)}
          checked={isChecked}
          onChange={changeHandler}
          id={id}
          disabled={disabled}
          {...props}
        />
        <span className={styles.check}></span>
        <span className={styles.circle}></span>
      </div>
      {label && (
        <label htmlFor={id} data-disabled={disabled} className={styles.label}>
          {label}
        </label>
      )}
    </label>
  );
};
