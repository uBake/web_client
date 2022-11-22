import { ButtonProps } from './Button';

export const getPaddings = ({
  icon,
  label,
  direction
}: Partial<ButtonProps>): string => {
  if (icon && label) {
    switch (direction) {
      case 'row':
        return '10px 24px 10px 16px';
      case 'row-reverse':
        return '10px 16px 10px 24px';
      case 'column':
        return '10px 24px 8px 24px';
      case 'column-reverse':
        return '8px 24px 10px 24px';
      default:
        return '10px 24px 10px 16px';
    }
  } else if (icon && !label) {
    return '11px';
  } else if (!icon && label) {
    return '10px 24px';
  }

  return '0px';
};
