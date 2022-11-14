import classNames from 'classnames';
import { ChangeEvent, FC, useState } from 'react';

import { Icon } from '../../Icon/Icon';
import { InputProps } from '../Input';
import { useStyles } from './styles';

export const CheckBox: FC<InputProps> = ({
  checked: isChecked,
  disabled,
  label,
  id = 'checkbox',
  error = '',
  onChange,
  className,
  ...props
}) => {
  const styles = useStyles({ disabled });
  const [checked, setChecked] = useState(isChecked);
  console.log(error);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    setChecked(prev => !prev);
    onChange && onChange(e);
  };

  return (
    <label htmlFor={id} className={classNames([styles.wrapper, className])}>
      <a
        data-checked={checked}
        data-disabled={disabled}
        data-error={error && error.length > 0}
        className={styles.checkbox}
      >
        <div></div>
        <Icon icon='Done' className={styles.check} />
        <input
          checked={checked}
          id={id}
          disabled={disabled}
          className={styles.input}
          onChange={changeHandler}
          {...props}
        />
      </a>
      <span data-disabled={disabled} className={styles.label}>
        {label}
      </span>
    </label>
  );
};
