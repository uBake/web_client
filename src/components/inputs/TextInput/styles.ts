import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(({ borderRadius }) => ({
  textInput: {
    borderRadius: borderRadius.large
  }
}));
