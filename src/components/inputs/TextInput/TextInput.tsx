import clsx from 'clsx';
import { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';

import { InputProps } from '..';
import { useStyles } from './styles';

export interface TextInputProps extends InputProps {
  label?: string;
  error?: string;
  advantageText?: string;
  textLimit?: number;
}

export const TextInput: FC<TextInputProps> = ({
  advantageText,
  className,
  error,
  label,
  placeholder,
  textLimit,
  onChange = (e: ChangeEvent<HTMLInputElement>) => {},
  type = 'text',
  value = '',
  disabled,
  ...props
}) => {
  const [currValue, setCurrValue] = useState(value);
  const styles = useStyles({ value: currValue });

  const changeHandler: ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    if (textLimit) {
      if (
        currValue.toString().length < textLimit ||
        (e.nativeEvent as any).inputType === 'deleteContentBackward'
      ) {
        setCurrValue(e.target.value);
        onChange(e);
      }
    } else {
      setCurrValue(e.target.value);
      onChange(e);
    }
  };

  return (
    <div
      className={clsx([
        styles.wrapper,
        { [styles.error]: Boolean(error) },
        { [styles.disabled]: Boolean(disabled) }
      ])}
    >
      <div className={styles.body}>
        <input
          type={type}
          value={currValue}
          onChange={changeHandler}
          className={clsx([styles.textInput, className])}
          disabled={disabled}
          {...props}
        />
        {label && (
          <label className={styles.label}>
            {label}
            <hr className={styles.labelBg} />
          </label>
        )}
      </div>
      <div className={styles.advantages}>
        {(advantageText || error) && (
          <span className={styles.supportingText}>
            {error && typeof error === 'string' ? error : advantageText}
          </span>
        )}
        {textLimit && (
          <span className={styles.limits}>
            {currValue.toString().length}/{textLimit}
          </span>
        )}
      </div>
    </div>
  );
};
