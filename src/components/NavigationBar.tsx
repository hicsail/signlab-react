import { AppBar, Toolbar, CssBaseline, Typography, ThemeProvider, createTheme, Link } from '@mui/material';
import { SideBar } from './SideBar';
import { Divider } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fef8f8'
    },
    text: {
      primary: '#3acff0'
    },
    divider: '#97948b'
  }
});

function NavBar() {

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <CssBaseline />
        <Toolbar>
          <SideBar />
          <Typography sx={{
            flexGrow: '1',
            textAlign: 'right',
            paddingRight: '1rem'
          }}>ASL-LEX SignLab</Typography>
          <Divider orientation="vertical" flexItem />
          <Link sx={{ paddingLeft: '1rem', color: "white" }}>Login</Link>
          <Link sx={{ paddingLeft: '1rem', color: "white" }}>Sign Up</Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export { NavBar };
