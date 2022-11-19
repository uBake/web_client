import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import { useStyles } from './styles';

export const CustomImage: FC<ImageProps> = ({ ...props }) => {
  const styles = useStyles();

  return <Image className={styles.wrapper} {...props} />;
};
