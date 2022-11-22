import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export { Checkbox } from './Checkbox/Checkbox';
export { RadioButton } from './RadioButton/RadioButton';
export { Switch } from './Switch/Switch';
export { TextInput } from './TextInput/TextInput';
