import { useState } from 'react';
import { Divider, Drawer, IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Environment } from './Environment';
import { Navigation } from './Navigation';

const useStyles = makeStyles(() => ({
  home: {
    color: 'black',
    fontSize: '22px',
    fontFamily: 'BlinkMacSystemFont',
    paddingLeft: '16px'
  },
  h2: {
    color: 'black',
    fontFamily: 'BlinkMacSystemFont',
    paddingLeft: '16px'
  },
  divider: {
    paddingTop: '8px'
  }
}));

function SideBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <Drawer PaperProps={{ sx: { width: '25%' } }} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ marginTop: '20px' }}>
          <Link to="/" onClick={() => setOpenDrawer(false)} className={classes.home}>
            Home
          </Link>
        </List>
        <Divider orientation="horizontal" flexItem className={classes.divider} />
        <h2 className={classes.h2}>Environment</h2>
        <Environment />
        <Divider orientation="horizontal" flexItem className={classes.divider} />
        <h2 className={classes.h2}>Navigation</h2>
        <Navigation />
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
export { SideBar };
