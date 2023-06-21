import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

interface Link {
  name: string;
  sublinks: string[];
}

interface LinksProps {
  links: Link[];
  styleProps: boolean;
}
const useStyles = makeStyles(() => ({
  title: {
    color: 'black',
    fontSize: '20px',
    fontFamily: 'BlinkMacSystemFont'
  },
  link: {
    color: 'black',
    fontSize: '17px'
  }
}));

const environment = {
  color: 'purple',
  fontFamily: 'BlinkMacSystemFont'
};

const navigation = {
  color: 'red',
  fontFamily: 'sans-serif'
};

const Dropdown: React.FC<LinksProps> = ({ links, styleProps }: LinksProps) => {
  const classes = useStyles();

  console.log(styleProps);

  return (
    <div>
      {links?.map((item: Link) => (
        <Accordion key={item.name} disableGutters elevation={0} sx={{ '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Link to={`/${item.name}`} style={styleProps ? environment : navigation}>
              {item.name}
            </Link>
          </AccordionSummary>
          <AccordionDetails>
            {item.sublinks?.map((point: any) => (
              <p key={point} className={classes.link}>
                {point}
              </p>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export { Dropdown };
