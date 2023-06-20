import { Box } from '@mui/material';
import { Dropdown } from './Dropdown';

const Environment: React.FC = () => {
  const items = [
    { name: 'Project: ', sublinks: ['hi', 'hello'] },
    { name: 'Study: ', sublinks: ['bye', 'byeeee'] }
  ];

  const style = { color: 'red', fontSize: '15px' };

  return (
    <Box>
      <Dropdown links={items} styleProps={style} />
    </Box>
  );
};

export { Environment };
