import clsx from 'clsx';
import { FC, HTMLAttributes, SyntheticEvent, useCallback, useEffect } from 'react';

import { useStyles } from './styles';

export interface OutsideClickProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

export const OutsideClick: FC<OutsideClickProps> = ({
  children,
  isOpen,
  onClose,
  className
}) => {
  const styles = useStyles();

  const handleOutsideClick = (e: SyntheticEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const closeByEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keyup', closeByEsc);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keyup', closeByEsc);
    };
  }, [closeByEsc]);

  return isOpen ? (
    <div
      onClick={handleOutsideClick}
      data-close
      className={clsx(styles.wrapper, className)}
    >
      {children}
    </div>
  ) : null;
};
