import { Box } from '@mui/material';
import { DropdownComponent } from './Dropdown';
import { useContext } from 'react';
import { EnvironmentContext } from '../context/EnvironmentContext';
import { useProject } from '../context/ProjectContext';
import { ProjectModel } from '../graphql/graphql';

const Environment: React.FC = () => {
  const { study } = useContext(EnvironmentContext);
  const { project, updateProject } = useProject();

  const handleClick = (newValue: string) => {
    console.log('before: ', project?.name);
    const newProject: ProjectModel = { name: newValue };
    updateProject(newProject);
    console.log(project?.name);
  };

  const items = [
    {
      name: `Project: ${project?.name}`,
      sublinks: [
        { title: 'Project name 1', link: 'pn1' },
        { title: 'Project name 2', link: 'pn2' }
      ],
      handleClick: handleClick
    },
    {
      name: `Study: ${study}`,
      sublinks: [
        { title: 'Study name 1', link: 'sn1' },
        { title: 'Study name 2', link: 'sn2' }
      ],
      handleClick: handleClick
    }
  ];

  return (
    <Box>
      <DropdownComponent links={items} source={'env'} />
    </Box>
  );
};

export { Environment };
