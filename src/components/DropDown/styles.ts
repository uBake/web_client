import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette: { surface2 }, borderRadius, elevations }) => ({
    dropdown: {
      display: 'flex',
      flexDirection: 'column',
      width: 288,
      borderRadius: borderRadius.large,
      filter: elevations[2],
      background: surface2,
      padding: [8, 0]
    }
  })
);
