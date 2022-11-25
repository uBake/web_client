import { createUseStyles } from 'react-jss';

import { CustomImageProps } from './Image';

export const useStyles = createUseStyles(
  ({ borderRadius: { flat, full } }) => ({
    image: {
      borderRadius: ({ variant }: Partial<CustomImageProps>) =>
        variant === 'avatar' ? full : flat
    }
  })
);
