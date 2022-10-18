import DarkIcon from '@mui/icons-material/Brightness4';
import LightIcon from '@mui/icons-material/Brightness7';
import { Button as BaseButton, Box, styled } from '@mui/material';
import { useSelector } from 'react-redux';

import {
  getThemeMode,
  toggleThemeMode
} from '../../../redux/slices/themeSlice';
import { useDispatch } from '../../../redux/store';

const Button = styled(BaseButton)(({ theme: { palette } }) => ({
  width: 100,
  background: palette.primary.light
}));

export const StyledButton = () => {
  const themeMode = useSelector(getThemeMode);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: 'grid',
        minHeight: '100vh',
        gridGap: 20,
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      {themeMode} mode
      <Button onClick={() => dispatch(toggleThemeMode())}>
        {themeMode === 'dark' ? <LightIcon /> : <DarkIcon />}
      </Button>
    </Box>
  );
};
