import { Box } from '@mui/material';
import { DropdownComponent } from './Dropdown';
import { useContext } from 'react';
import { SampleContext } from '../context/SampleContext';

const Environment: React.FC = () => {
  const { study, project } = useContext(SampleContext);

  const items = [
    {
      name: 'Project: ' + project,
      sublinks: [
        { title: 'Project name 1', link: 'pn1' },
        { title: 'Project name 2', link: 'pn2' }
      ]
    },
    {
      name: 'Study: ' + study,
      sublinks: [
        { title: 'Study name 1', link: 'sn1' },
        { title: 'Study name 2', link: 'sn2' }
      ]
    }
  ];

  return (
    <Box>
      <DropdownComponent links={items} source={'env'} />
    </Box>
  );
};

export { Environment };
