import clsx from 'clsx';
import { ChangeEvent, FC, useState } from 'react';

import { InputProps } from '..';
import { Icon } from '../../Icon/Icon';
import { useStyles } from './styles';

export interface CheckboxProps extends InputProps {
  error?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  disabled = false,
  label,
  id = 'checkbox',
  error = false,
  onChange,
  className,
  ...props
}) => {
  const styles = useStyles();
  const [isChecked, setIsChecked] = useState(checked);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label htmlFor={id} className={clsx([styles.wrapper, className])}>
      <a
        data-checked={isChecked}
        data-disabled={disabled}
        data-error={error}
        className={styles.checkbox}
      >
        <Icon icon='Done' className={styles.check} />
        <input
          checked={isChecked}
          id={id}
          disabled={disabled}
          className={styles.input}
          onChange={changeHandler}
          type='checkbox'
          {...props}
        />
      </a>
      <label htmlFor={id} data-disabled={disabled} className={styles.label}>
        {label}
      </label>
    </label>
  );
};
