import { FC, InputHTMLAttributes } from 'react';

import { CheckBox } from './Checkbox/Checkbox';
import { RadioButton } from './RadioButton/RadioButton';
import { Switch } from './Switch/Switch';
import { TextInput } from './TextInput/TextInput';

export const Input: FC<InputProps> = ({
  type = 'text',
  className,
  ...props
}) => {
  switch (type) {
    case 'checkbox':
      return <CheckBox {...props} />;
    case 'switch':
      return <Switch {...props} />;
    case 'radio':
      return <RadioButton {...props} />;
    default:
      return <TextInput type={type} {...props} />;
  }
};

type WithIconVariants = 'no' | 'onSelect' | 'always';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  advantageText?: string;
  textLimit?: number;
  withIcon?: WithIconVariants;
}
