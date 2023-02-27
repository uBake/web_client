import clsx from 'clsx';
import { FC, HTMLAttributes, SyntheticEvent, useEffect } from 'react';

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
  if (!isOpen) return null;

  const styles = useStyles();

  const handleOutsideClick = (e: SyntheticEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const closeByEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keyup', closeByEsc);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keyup', closeByEsc);
    };
  }, []);

  return (
    <div
      onClick={handleOutsideClick}
      data-close
      className={clsx(styles.wrapper, className)}
    >
      {children}
    </div>
  );
};
