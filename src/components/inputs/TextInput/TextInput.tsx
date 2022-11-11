import classNames from 'classnames';
import { ChangeEventHandler, FC, useState } from 'react';

import { InputProps } from '../Input';
import { useStyles } from './styles';

interface TextInputProps extends InputProps {
  advantageText?: string;
  textLimit?: number;
  error?: string;
}

export const TextInput: FC<TextInputProps> = ({
  advantageText,
  className,
  error,
  placeholder,
  textLimit,
  onChange = () => {},
  type = 'text',
  ...props
}) => {
  const styles = useStyles();
  const [currValue, setCurrValue] = useState('');

  const changeHandler: ChangeEventHandler<HTMLInputElement> = e => {
    const targetValue = e.target.value;
    if (textLimit) {
      if (
        currValue.length < textLimit ||
        e.nativeEvent.inputType === 'deleteContentBackward'
      ) {
        setCurrValue(targetValue);
        onChange(e);
      }
    } else {
      setCurrValue(targetValue);
      onChange(e);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <input
          type={type}
          value={currValue}
          onChange={changeHandler}
          className={classNames(styles.textInput, className)}
          {...props}
        />
        <span className={styles.placeholder}>
          {placeholder}
          <hr />
        </span>
      </div>
      <div className={styles.advantages}>
        {advantageText && (
          <span className={styles.supportingText}>{advantageText}</span>
        )}
        {textLimit && (
          <span className={styles.limits}>
            {currValue.length}/{textLimit}
          </span>
        )}
      </div>
    </div>
  );
};
