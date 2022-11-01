import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ borderRadius, border: { outline }, aspectRatio }) => ({
    card: {
      borderRadius: borderRadius.medium,
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      border: outline
    },
    cardHead: {
      aspectRatio: aspectRatio['16/9']
    },
    cardBody: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%',
      padding: 20
    },
    cardTitle: {}
  })
);
