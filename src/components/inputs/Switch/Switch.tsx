import classNames from 'classnames';
import { ChangeEvent, FC, useState } from 'react';

import { Icon } from '../../Icon/Icon';
import { InputProps } from '../Input';
import { useStyles } from './styles';

export const Switch: FC<InputProps> = ({
  checked,
  disabled = false,
  label,
  id = 'switch',
  onChange,
  className,
  withIcon = 'no',
  ...props
}) => {
  const styles = useStyles({ disabled, withIcon });
  const [isChecked, setIsChecked] = useState(checked);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label htmlFor={id} className={classNames([styles.wrapper, className])}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <a
        className={classNames([
          styles.checkbox,
          { [styles.checked]: isChecked }
        ])}
      >
        <span className={styles.thumb}>
          {withIcon === 'always' && !isChecked && (
            <Icon size={16} icon='Close' className={styles.closeIcon} />
          )}
          {withIcon !== 'no' && isChecked && (
            <Icon size={16} icon='Done' className={styles.doneIcon} />
          )}
          <span className={styles.halo}></span>
        </span>
        <input
          type='checkbox'
          checked={isChecked}
          id={id}
          disabled={disabled}
          className={styles.input}
          onChange={changeHandler}
          {...props}
        />
      </a>
    </label>
  );
};
