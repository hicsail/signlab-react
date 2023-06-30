import { Box } from '@mui/material';
import { DropdownComponent } from './Dropdown';

const Navigation: React.FC = () => {
  const names = [
    {
      name: 'Projects',
      sublinks: [
        { title: 'New Project', link: 'newproject' },
        { title: 'Project Control', link: 'projectcontrol' },
        { title: 'User Permissions', link: 'userpermissions' }
      ]
    },
    {
      name: 'Studies',
      sublinks: [
        { title: 'Create New Study', link: 'newstudy' },
        { title: 'Study Control', link: 'studycontrol' },
        { title: 'User Permissions', link: 'studyuserpermissions' },
        { title: 'Entry Controls', link: 'entrycontrols' },
        { title: 'Download Tags', link: 'downloadtags' }
      ]
    },
    {
      name: 'Datasets',
      sublinks: [
        { title: 'Dataset Controls', link: 'datasetcontrols' },
        { title: 'Project Access', link: 'projectaccess' }
      ]
    },
    {
      name: 'Contribute',
      sublinks: [{ title: 'Contribute to a Study', link: 'contribute' }]
    }
  ];

  return (
    <Box>
      <DropdownComponent links={names} />
    </Box>
  );
};

export { Navigation };
