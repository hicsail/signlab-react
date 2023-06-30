import { Accordion, Link } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const DropdownComponent: React.FC<LinksProps> = ({ links }: LinksProps) => {
  return (
    <div>
      {links?.map((item: Link) => (
        <Accordion key={item.name} disableGutters elevation={0} sx={{ '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Link
              underline={'none'}
              href={`/${item.name}`}
            >
              {item.name}
            </Link>
          </AccordionSummary>
          <AccordionDetails>
            {item.sublinks?.map((sublink: SubLink) => (
              <p>
                <Link
                  sx={{
                    fontSize: '16px'
                  }}
                  underline={'none'}
                  href={`/${sublink.link}`}
                  key={sublink.title}
                >
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
