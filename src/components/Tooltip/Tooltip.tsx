import cn from 'clsx';
import { DetailedHTMLProps, FC, HTMLAttributes, SVGProps } from 'react';

import { useStyles } from './styles';

export const Tooltip: FC<TooltipProps> = ({ children, text, position }) => {
  const styles = useStyles();

  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.tooltipWrapper, styles[position])}>
        <span className={styles.tooltip}>
          <Tip className={styles.tip} />
          {text && text.length > 0 ? text : 'Tooltip'}
        </span>
      </div>
      {children}
    </div>
  );
};

const Tip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='18'
    height='7'
    viewBox='0 0 18 7'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M9.0025 7.00098L0.351562 0L9.00195 3L17.6516 0L9.0025 7.00098Z' />
  </svg>
);

interface TooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  position: TooltipPos;
  text: string;
}

type TooltipPos = 'top' | 'right' | 'bottom' | 'left';
