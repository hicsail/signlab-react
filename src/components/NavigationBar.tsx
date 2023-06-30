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
        <Link sx={{ paddingLeft: '1rem', color: 'white' }}>Login</Link>
        <Link sx={{ paddingLeft: '1rem', color: 'white' }}>Sign Up</Link>
      </Toolbar>
    </AppBar>
  );
}
export { NavBar };
