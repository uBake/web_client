import classNames from 'classnames';
import { FC } from 'react';

import { InputProps } from '../Input';
import { useStyles } from './styles';

export const RadioButton: FC<InputProps> = ({ className, ...props }) => {
  const styles = useStyles();

  return <input className={classNames(styles.radioButton, className)} {...props} />;
};
