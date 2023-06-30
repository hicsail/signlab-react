import React, { FC } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

export interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      background: {
        paper: '#fef8f8'
      },
      text: {
        primary: 'cyan'
      },
      divider: '#97948b'
    }
  });

  theme.typography.h5 = {
    color: 'black',
    fontFamily: 'BlinkMacSystemFont',
    padding: '13px',
    fontWeight: 'bold',
    fontSize: '23px'
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
