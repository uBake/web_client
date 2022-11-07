import classNames from 'classnames';
import { FC } from 'react';

import { InputProps } from '../Input';
import { useStyles } from './styles';

export const TextInput: FC<InputProps> = ({ type = 'text', className, ...props }) => {
  const styles = useStyles();

  return <input type={type} className={classNames(styles.textInput, className)} {...props} />;
};
