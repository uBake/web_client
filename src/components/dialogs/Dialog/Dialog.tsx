import { DialogHTMLAttributes, FC } from 'react';

import { Button, ButtonProps } from '../../buttons/Button/Button';
import { Icon, IconVariant } from '../../Icon/Icon';
import { useStyles } from './styles';

export interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  title?: string;
  icon?: IconVariant;
  onClose?: () => void;
  negativeBtn?: ButtonProps;
  positiveBtn?: ButtonProps;
  neutralBtn?: ButtonProps;
}

export const Dialog: FC<DialogProps> = ({
  title,
  icon,
  children,
  onClose,
  negativeBtn,
  positiveBtn,
  neutralBtn,
  ...props
}) => {
  const styles = useStyles();

  return (
    <dialog className={styles.wrapper} {...props}>
      {(icon || title) && (
        <div className={styles.head}>
          {icon && <Icon icon={icon} size={24} className={styles.icon} />}
          {title && <h5 className={styles.title}>{title}</h5>}
        </div>
      )}
      {children && <div className={styles.content}>{children}</div>}
      <div className={styles.footer}>
        {neutralBtn && (
          <Button className={styles.btn} variant='ghost' {...neutralBtn} />
        )}
        <div className={styles.btnsWrapper}>
          {negativeBtn && (
            <Button className={styles.btn} variant='ghost' {...negativeBtn} />
          )}
          {positiveBtn && (
            <Button className={styles.btn} variant='ghost' {...positiveBtn} />
          )}
        </div>
      </div>
    </dialog>
  );
};
