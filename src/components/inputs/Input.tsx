import { FC, InputHTMLAttributes } from 'react';

import { CheckBox } from './Checkbox/Checkbox';
import { RadioButton } from './RadioButton/RadioButton';
import { TextInput } from './TextInput/TextInput';

export const Input: FC<InputProps> = ({ type, className, ...props }) => {
  switch (type) {
    case 'checkbox':
      return <CheckBox type='checkbox' {...props} />;
    case 'radio':
      return <RadioButton type='radio' {...props} />;
    default:
      return <TextInput type={type} {...props} />;
  }
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  advantageText?: string;
  textLimit?: number;
}
