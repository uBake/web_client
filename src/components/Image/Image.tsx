import clsx from 'clsx';
import NextImage, { ImageProps } from 'next/image';
import { FC } from 'react';

import { aspectRatio } from '../../themes/aspectRatio';
import { AspectRatioVariant } from '../../types';
import { useStyles } from './styles';

export interface CustomImageProps extends ImageProps {
  isAvatar?: boolean;
  ratio?: AspectRatioVariant;
  width: number;
}

export const Image: FC<CustomImageProps> = ({
  className,
  isAvatar,
  ratio,
  width,
  height,
  ...props
}) => {
  const styles = useStyles({ isAvatar });

  const currHeight = ratio && !isAvatar ? width / aspectRatio[ratio] : width;

  return (
    <NextImage
      width={width}
      height={currHeight}
      className={clsx(className, styles.image)}
      {...props}
    />
  );
};
