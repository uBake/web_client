import cn from 'clsx';
import { ChangeEvent, FC, useState } from 'react';

import { Icon } from '../../Icon/Icon';
import { InputProps } from '../Input';
import { useStyles } from './styles';

export const CheckBox: FC<InputProps> = ({
  checked,
  disabled = false,
  label,
  id = 'checkbox',
  error = '',
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
    <label htmlFor={id} className={cn([styles.wrapper, className])}>
      <a
        data-checked={isChecked}
        data-disabled={disabled}
        data-error={error && error.length > 0}
        className={styles.checkbox}
      >
        <div></div>
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
