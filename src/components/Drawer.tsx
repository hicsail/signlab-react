import { useState } from 'react';
import { Drawer, IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import { makeStyles } from '@mui/styles';
import { Environment } from './Environment';

const useStyles = makeStyles(() => ({
  title: {
    color: 'black',
    fontSize: '20px',
    fontFamily: 'BlinkMacSystemFont',
    paddingLeft: '16px'
  }
}));

const names = [
  { name: 'Projects', sublinks: ['Project Control', 'User Permissions', 'New Project'] },
  { name: 'Studies', sublinks: ['Study Control', 'User Permissions', 'Entry Controls', 'Download Tags', 'Create New Study'] },
  { name: 'Datasets', sublinks: ['Dataset Controls', 'Project Access'] },
  { name: 'Contribute', sublinks: ['Contribute to a Study'] }
];

const style = { color: 'purple', fontSize: '20px' };

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
        <Environment />
        {names && <Dropdown links={names} styleProps={style} />}
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
export { DrawerComponent };
