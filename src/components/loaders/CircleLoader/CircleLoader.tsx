import { useStyles } from './styles';

export const CircleLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.circle} />
    </div>
  );
};
