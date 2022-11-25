import { FC, MenuHTMLAttributes } from 'react';

import { Toolbar, ToolbarProps } from '../../Toolbar/Toolbar';
import { useStyles } from './styles';

export interface BottomSheetData {
  onClose: () => void;
}

type BottomSheetProps = MenuHTMLAttributes<HTMLMenuElement> &
  ToolbarProps &
  BottomSheetData;

export const BottomSheet: FC<BottomSheetProps> = ({
  iconButton,
  title,
  subtitle,
  image,
  navigationItems,
  onClose,
  children
}) => {
  const styles = useStyles();

  return (
    <menu className={styles.wrapper}>
      <Toolbar
        iconButton={{ ...iconButton, icon: 'Close', onClick: onClose }}
        title={title}
        subtitle={subtitle}
        image={image}
        navigationItems={navigationItems}
        className={styles.head}
      />
      <div className={styles.body}>{children}</div>
    </menu>
  );
};
