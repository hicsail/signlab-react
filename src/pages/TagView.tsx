import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';

const TagView = () => {
  const { state } = useLocation();
  console.log(state);
  const initialData = {
    users: [
      {
        firstname: 'Max',
        lastname: 'Mustermann',
        age: 25,
        email: 'max@mustermann.com'
      },
      {
        firstname: 'John',
        lastname: 'Doe',
        age: 35,
        email: 'john@doe.com'
      }
    ]
  };

  return (
    <Container sx={{ left: '5%', width: '90%', top: '100px', position: 'absolute' }}>
      <JsonForms schema={state.schema} uischema={state.uischema} data={initialData} renderers={materialRenderers} cells={materialCells} />
    </Container>
  );
};

export { TagView };
