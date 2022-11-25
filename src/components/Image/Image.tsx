import clsx from 'clsx';
import NextImage, { ImageProps } from 'next/image';
import { FC } from 'react';

import { useStyles } from './styles';

export type ImageVariants = 'avatar' | '1/1' | '5/4' | '4/3' | '16/9';

export interface CustomImageProps extends ImageProps {
  variant?: ImageVariants;
  width: number;
}

export const Image: FC<CustomImageProps> = ({
  className,
  variant,
  width,
  height,
  ...props
}) => {
  const styles = useStyles({ variant });

  const currHeight = variant === 'avatar' ? 40 : width / Number(variant);

  return (
    <NextImage
      width={width}
      height={currHeight}
      className={clsx(className, styles.image)}
      {...props}
    />
  );
};
