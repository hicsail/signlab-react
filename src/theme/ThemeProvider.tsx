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
        primary: '#020202'
      },
      divider: '#a1a1a1'
    },
    typography: {
      button: {
        textTransform: 'none',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont'
      }
    },
    components: {
      MuiLink: {
        defaultProps: {
          color: '#000',
          fontSize: '20px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont'
        }
      },
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: '#6b37fa'
          }
        }
      }
    }
  });

  theme.typography.h3 = {
    color: 'black',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont',
    padding: '14px',
    fontWeight: 'normal',
    fontSize: '40px'
  };

  theme.typography.h5 = {
    color: 'black',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont',
    padding: '14px',
    fontWeight: 'bold',
    fontSize: '23px'
  };

  theme.typography.body1 = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont',
    fontWeight: 'bold',
    fontSize: '18px',
    textAlign: 'left'
  };

  theme.typography.body2 = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont',
    fontWeight: 'normal',
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
