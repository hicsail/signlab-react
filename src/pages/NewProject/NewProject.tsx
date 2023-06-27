import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import { Button } from '@mui/material';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      description: 'Please enter your name'
    },
    description: {
      type: 'string',
      description: 'Please enter your description'
    }
  },
  required: ['name', 'description']
};

const uischema = {
  type: 'Group',
  label: 'Create New Project',
  elements: [
    {
      type: 'Control',
      label: 'Name',
      scope: '#/properties/name'
    },
    {
      type: 'Control',
      label: 'Description',
      scope: '#/properties/description'
    }
  ]
};

const initialData = {
  name: 'John Doe',
  description: '12345'
};

const useStyles = makeStyles(() => ({
  div: {
    position: 'fixed',
    top: '15%',
    left: '10%',
    minWidth: '80%'
  }
}));
const NewProject: React.FC = () => {
  const [data, setData] = useState(initialData);
  const classes = useStyles();
  return (
    <div className={classes.div}>
      {/* prettier-ignore */}
      <JsonForms 
        schema={schema} 
        uischema={uischema} 
        data={data} 
        renderers={materialRenderers} 
        cells={materialCells} 
        onChange={({ data }) => setData(data)} 
        />
      <Button sx={{ color: 'white', bgcolor: '#2582f3', marginTop: '15px' }} variant="outlined">
        Submit
      </Button>
    </div>
  );
};

export { NewProject };
