import classNames from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { useStyles } from './styles';

export const Tooltip: FC<TooltipProps> = ({ children, text, position }) => {
  const styles = useStyles();

  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.tooltipWrapper, styles[position])}>
        <span className={styles.tooltip}>
          <div className={styles.tip}></div>
          {text}
        </span>
      </div>
      {children}
    </div>
  );
};

interface TooltipProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  position: TooltipPos;
  text: string;
}

type TooltipPos = 'top' | 'bottom' | 'left' | 'right';
