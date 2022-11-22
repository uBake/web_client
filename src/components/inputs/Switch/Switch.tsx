import clsx from 'clsx';
import { ChangeEvent, FC, useState } from 'react';

import { InputProps } from '..';
import { Icon } from '../../Icon/Icon';
import { useStyles } from './styles';

type WithIconVariants = 'no' | 'onSelect' | 'always';

export interface SwitchProps extends InputProps {
  withIcon?: WithIconVariants;
}

export const Switch: FC<SwitchProps> = ({
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
    <label htmlFor={id} className={clsx([styles.wrapper, className])}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <a className={clsx([styles.checkbox, { [styles.checked]: isChecked }])}>
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
