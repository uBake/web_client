import { FC, HTMLAttributes } from 'react';

import { Button, ButtonProps } from '../../buttons/Button/Button';
import { useStyles } from './styles';

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  buttonAttributes?: ButtonProps;
}

export const Snackbar: FC<SnackbarProps> = ({
  children,
  buttonAttributes,
  ...props
}) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper} {...props}>
      {children && <div className={styles.content}>{children}</div>}
      {buttonAttributes && (
        <div className={styles.buttonWrapper}>
          <Button
            className={styles.btn}
            variant='ghost'
            {...buttonAttributes}
          />
        </div>
      )}
    </div>
  );
};
