import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';

const NewStudy: React.FC = () => {
  const initialData = {
    name: '',
    description: '',
    instructions: ''
  };

  const [data, setData] = useState(initialData);

  const handleChange = (data: any) => {
    setData(data);
  };
  // @ts-ignore
  function produceJSONForm() {
    // @ts-ignore
    const schema = {
      type: 'object',
      properties: {},
      required: []
    };
    // @ts-ignore
    const uischema = {
      type: 'VerticalLayout',
      elements: []
    };
  }

  return (
    <Container sx={{ left: '5%', width: '90%', top: '100px', position: 'absolute' }}>
      <Typography variant="h5">Create New Study</Typography>
      <JsonForms schema={schema} uischema={uischema} data={data} renderers={materialRenderers} cells={materialCells} onChange={({ data }) => handleChange(data)} />
    </Container>
  );
};

export { NewStudy };
