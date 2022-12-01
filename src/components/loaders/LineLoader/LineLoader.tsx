import { useStyles } from './styles';

export const LineLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.line} />
    </div>
  );
};
