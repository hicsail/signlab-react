import { useState } from 'react';
import { Drawer, IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  title: {
    color: 'black',
    fontSize: '20px',
    fontFamily: 'BlinkMacSystemFont',
    paddingLeft: '16px'
  }
}));

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <Drawer PaperProps={{ sx: { width: '25%' } }} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <Link to="/" onClick={() => setOpenDrawer(false)} className={classes.title}>
            Home
          </Link>
        </List>
        <Dropdown />
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
export { DrawerComponent };
