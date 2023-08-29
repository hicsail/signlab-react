import { Accordion, Button, Link } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface SubLink {
  title: string;
  link?: string;
}

interface Link {
  name: string;
  sublinks: SubLink[];
  handleClick?: (event: any) => void;
}

interface LinksProps {
  source: string;
  links: Link[];
}

const DropdownComponent: React.FC<LinksProps> = ({ source, links }: LinksProps) => {
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
                {source == 'env' ? (
                  <Button
                    sx={{
                      fontSize: '15px',
                      color: 'black'
                    }}
                    key={sublink.title}
                    onClick={() => item.handleClick!(sublink.title)}
                  >
                    {sublink.title}
                  </Button>
                ) : (
                  <Button
                    sx={{
                      fontSize: '15px',
                      color: 'black'
                    }}
                    key={sublink.title}
                    href={`/${sublink.link}`}
                  >
                    {sublink.title}
                  </Button>
                )}
              </p>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export { DropdownComponent };
