import { AppBar, Toolbar, CssBaseline, Typography, Link } from '@mui/material';
import { SideBar } from './SideBar';
import { Divider } from '@mui/material';

function NavBar() {
  return (
    <AppBar>
      <CssBaseline />
      <Toolbar>
        <SideBar />
        <Typography
          sx={{
            flexGrow: '1',
            textAlign: 'right',
            paddingRight: '1rem'
          }}
        >
          ASL-LEX SignLab
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Link sx={{ fontSize: '16px', paddingLeft: '1rem', color: 'white' }} underline="none">
          Login
        </Link>
        <Link sx={{ fontSize: '16px', paddingLeft: '1rem', color: 'white' }} underline="none">
          Sign Up
        </Link>
      </Toolbar>
    </AppBar>
  );
}
export { NavBar };
