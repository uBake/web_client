import { FC, HTMLAttributes } from 'react';

import { Button, ButtonProps } from '../../buttons/Button/Button';
import { useStyles } from './styles';

type SnackbarTypes = 'single' | 'multiple';

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  buttonAttributes?: ButtonProps;
  type?: SnackbarTypes;
}

export const Snackbar: FC<SnackbarProps> = ({
  children,
  buttonAttributes,
  type = 'single',
  ...props
}) => {
  const styles = useStyles({ type });

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
