import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  title: {
    color: 'black',
    fontSize: '20px',
    fontFamily: 'BlinkMacSystemFont'
  },
  icon: {
    color: 'white'
  },
  link: {
    color: 'black',
    fontSize: '17px'
  }
}));

const links = [
  { name: 'Projects', items: ['Project Control', 'User Permissions', 'New Project'] },
  { name: 'Studies', items: ['Study Control', 'Create New Study'] },
  { name: 'Datasets', items: ['Dataset Controls', 'Project Access'] }
];

function Dropdown() {
  const classes = useStyles();
  return (
    <div>
      {links.map((item: any) => (
        <Accordion key={item.name} disableGutters elevation={0} sx={{ '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Link to={`/${item.name}`} className={classes.title}>
              {item.name}
            </Link>
          </AccordionSummary>
          <AccordionDetails>
            {item.items.map((point: any) => (
              <p key={point} className={classes.link}>
                {point}
              </p>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export { Dropdown };
