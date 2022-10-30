import { FC, PropsWithChildren } from 'react';

import { useStyles } from './styles';

// export enum ButtonVariants = 'filled' | ''

export interface ButtonProps extends PropsWithChildren {
	// variants: ButtonVariants
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const styles = useStyles();	

  return <button className={styles.button} {...props}>{children}</button>;
};
