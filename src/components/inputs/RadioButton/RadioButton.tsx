import classNames from 'classnames';
import { ChangeEvent, FC, useState } from 'react';

import { InputProps } from '../Input';
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
        className={classNames(styles.radio, {
          [styles.checked]: isChecked,
          [styles.disabled]: disabled
        })}
      >
        <input
          className={classNames(styles.input, className)}
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
