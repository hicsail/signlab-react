import { Box } from '@mui/material';
import { DropdownComponent } from './Dropdown';

const Environment: React.FC = () => {
  const items = [
    {
      name: 'Project:',
      sublinks: [
        { title: 'Project name 1', link: 'pn1' },
        { title: 'Project name 2', link: 'pn2' }
      ]
    },
    {
      name: 'Study:',
      sublinks: [
        { title: 'Study name 1', link: 'sn1' },
        { title: 'Study name 2', link: 'sn2' }
      ]
    }
  ];

  return (
    <Box>
      <DropdownComponent links={items} />
    </Box>
  );
};

export { Environment };
