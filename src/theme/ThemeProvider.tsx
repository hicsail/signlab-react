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
        primary: '#g123a1'
      },
      divider: '#97948b'
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

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
