import { DialogHTMLAttributes, FC } from 'react';

import { Button, ButtonProps } from '../../buttons/Button/Button';
import { Toolbar, ToolbarData } from '../../Toolbar/Toolbar';
import { useStyles } from './styles';

export type FullscreenDialogProps = DialogHTMLAttributes<HTMLDialogElement> &
  ToolbarData & {
    closeButton?: ButtonProps;
  };

export const FullscreenDialog: FC<FullscreenDialogProps> = ({
  iconButton,
  title,
  subtitle,
  image,
  navigationItems,
  closeButton,
  children,
  ...props
}) => {
  const styles = useStyles();

  return (
    <dialog className={styles.wrapper} {...props}>
      <Toolbar
        iconButton={iconButton}
        title={title}
        subtitle={subtitle}
        image={image}
        navigationItems={navigationItems}
      >
        {closeButton && <Button variant='ghost' {...closeButton} />}
      </Toolbar>
    </dialog>
  );
};
