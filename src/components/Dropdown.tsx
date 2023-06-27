import { Accordion } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

interface SubLink {
  title: string;
  link: string;
}

interface Link {
  name: string;
  sublinks: SubLink[];
}

interface LinksProps {
  links: Link[];
}
const useStyles = makeStyles(() => ({
  link: {
    color: 'black',
    fontSize: '20px',
    fontFamily: 'BlinkMacSystemFont'
  },
  sublink: {
    color: 'black',
    fontSize: '16px',
    margin: '5px'
  },
  accordion: {
    paddingLeft: '4px'
  }
}));

const DropdownComponent: React.FC<LinksProps> = ({ links }: LinksProps) => {
  const classes = useStyles();

  return (
    <div>
      {links?.map((item: Link) => (
        <Accordion key={item.name} className={classes.accordion} disableGutters elevation={0} sx={{ '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Link to={`/${item.name}`} className={classes.link}>
              {item.name}
            </Link>
          </AccordionSummary>
          <AccordionDetails className={classes.accordion}>
            {item.sublinks?.map((sublink: SubLink) => (
              <p>
                <Link to={`/${sublink.link}`} key={sublink.title} className={classes.sublink}>
                  {sublink.title}
                </Link>
              </p>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export { DropdownComponent };
