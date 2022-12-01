import { createUseStyles } from 'react-jss';

import { CustomImageProps } from './Image';

export const useStyles = createUseStyles(
  ({ borderRadius: { flat, full } }) => ({
    image: {
      borderRadius: ({ isAvatar }: Partial<CustomImageProps>) =>
        isAvatar ? full : flat
    }
  })
);
