import { Accordion, Button, Link, Typography } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from 'react';
import { SampleContext } from '../context/SampleContext';

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

/*const { project, study } = useContext(SampleContext); */

const DropdownComponent: React.FC<LinksProps> = ({ links }: LinksProps) => {
  /* const handleClick = (e: any) => {
    setStudy(e.target.value);
  }; */

  return (
    <div>
      {links?.map((item: Link) => (
        <Accordion key={item.name} disableGutters elevation={0} sx={{ '&:before': { display: 'none' } }}>
          <AccordionSummary key={item.name} expandIcon={<ExpandMoreIcon />}>
            <Link underline={'none'}>{item.name}</Link>
          </AccordionSummary>
          <AccordionDetails key={item.name}>
            {item.sublinks?.map((sublink: SubLink) => (
              <p key={sublink.title}>
                <Button
                  sx={{
                    fontSize: '15px',
                    color: 'black'
                  }}
                  key={sublink.title}
                >
                  {sublink.title}
                </Button>
              </p>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export { DropdownComponent };
