import classNames from 'classnames';
import { FC } from 'react';

import { InputProps } from '../Input';
import { useStyles } from './styles';

export const CheckBox: FC<InputProps> = ({ className, ...props }) => {
  const styles = useStyles();

  return (
    <input className={classNames(styles.checkbox, className)} {...props} />
  );
};
