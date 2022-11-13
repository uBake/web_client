import classNames from 'classnames';
import { FC, useState } from 'react';

import { InputProps } from '../Input';
import { useStyles } from './styles';

export const CheckBox: FC<InputProps> = ({
  checked: isChecked,
  className,
  disabled,
  label,
  id = 'checkbox',
  ...props
}) => {
  const [checked, setChecked] = useState(isChecked);
  const styles = useStyles({ disabled });

  const clickHandler = () => {
    !disabled && setChecked(!checked);
  };

  return (
    <div
      className={classNames(styles.wrapper, { [styles.disabled]: disabled })}
    >
      <div
        className={classNames([styles.check, { [styles.checked]: checked }])}
        onClick={clickHandler}
      >
        <input
          checked={checked}
          id={id}
          disabled={disabled}
          className={classNames(styles.checkbox, className)}
          {...props}
        />
      </div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};
