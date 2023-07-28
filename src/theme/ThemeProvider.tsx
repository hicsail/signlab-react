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
        paper: '#fefefe'
      },
      text: {
        primary: '#000000'
      },
      divider: '#a1a1a1'
    },
    typography: {
      button: {
        textTransform: 'none',
        fontFamily: 'BlinkMacSystemFont'
      }
    },
    components: {
      MuiLink: {
        defaultProps: {
          color: '#000',
          fontSize: '20px',
          fontFamily: 'BlinkMacSystemFont'
        }
      }
    }
  });

  theme.typography.h5 = {
    color: 'black',
    fontFamily: 'BlinkMacSystemFont',
    padding: '14px',
    fontWeight: 'bold',
    fontSize: '23px'
  };

  theme.typography.body1 = {
    fontFamily: 'BlinkMacSystemFont',
    fontWeight: 'bold',
    fontSize: '18px',
    textAlign: 'left'
  };

  theme.typography.body2 = {
    fontFamily: 'BlinkMacSystemFont',
    fontWeight: 'bold',
    fontSize: '15px',
    textAlign: 'left'
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
