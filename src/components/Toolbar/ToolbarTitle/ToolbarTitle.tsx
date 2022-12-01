import { FC, HTMLAttributes } from 'react';

import { CustomImageProps, Image } from '../../Image/Image';
import { useStyles } from './styles';

export interface ToolbarTitleProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  image?: CustomImageProps;
}

export const ToolbarTitle: FC<ToolbarTitleProps> = ({
  title,
  subtitle,
  image
}) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      {image && (
        <Image
          isAvatar
          className={styles.image}
          {...image}
          width={40}
          alt={title || subtitle || ''}
        />
      )}
      {(title || subtitle) && (
        <div className={styles.labels}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
    </div>
  );
};
