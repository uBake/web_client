import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette: { onSurface, onSurfaceVariant }, typography, borderRadius }) => ({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: [8, 0],
      width: '100%',
      height: 64
    },
    image: {
      borderRadius: borderRadius.large
    },
    labels: {},
    title: {
      color: onSurface,
      ...typography.sizes.title.large,
      ...typography.weights[700]
    },
    subtitle: {
      color: onSurfaceVariant,
      ...typography.sizes.title.small
    }
  })
);
