import { AppBar, Toolbar, CssBaseline, Typography, ThemeProvider, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DrawerComponent } from './Drawer';
import { Divider } from '@mui/material';

const useStyles = makeStyles(() => ({
  logo: {
    flexGrow: '1',
    textAlign: 'right',
    paddingRight: '1rem'
  },
  AppBar: {
    top: 0,
    color: 'primary'
  },
  p: {
    paddingLeft: '1rem'
  }
}));

const theme = createTheme({
  palette: {
    background: {
      paper: '#fef8f8'
    },
    text: {
      primary: '#2435ea'
    },
    divider: '#97948b'
  }
});

function NavBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar className={classes.AppBar}>
        <CssBaseline />
        <Toolbar>
          <DrawerComponent />
          <Typography className={classes.logo}>ASL-LEX SignLab</Typography>
          <Divider orientation="vertical" flexItem />
          <p className={classes.p}>Login</p>
          <p className={classes.p}>Sign Up</p>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export { NavBar };
