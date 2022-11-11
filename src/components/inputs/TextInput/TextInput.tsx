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
  value = '',
  ...props
}) => {
  const [currValue, setCurrValue] = useState(value);
  const styles = useStyles({ currValue });

  const changeHandler: ChangeEventHandler<HTMLInputElement> = e => {
    const targetValue = e.target.value;
    if (textLimit) {
      if (
        currValue.toString().length < textLimit ||
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
    <div
      className={classNames([
        styles.wrapper,
        { [styles.error]: Boolean(error) }
      ])}
    >
      <div className={styles.body}>
        <input
          type={type}
          value={currValue}
          onChange={changeHandler}
          className={classNames([styles.textInput, className])}
          {...props}
        />
        <span className={styles.placeholder}>
          {placeholder}
          <hr className={styles.placeholderBg} />
        </span>
      </div>
      <div className={styles.advantages}>
        {(advantageText || error) && (
          <span className={styles.supportingText}>
            {error ? error : advantageText}
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
