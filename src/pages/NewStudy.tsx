import { Container } from '@mui/material';
import { useState } from 'react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      pattern: '^[a-zA-Z 0-9]*$'
    },
    description: {
      type: 'string'
    },
    instructions: {
      type: 'string'
    },
    times: {
      type: 'string',
      default: 1
    },
    tag: {
      type: 'number'
    }
  },
  required: ['name', 'description', 'instructions'],
  errorMessage: {
    type: 'data should be an object',
    properties: { name: 'Study name should be ...', description: 'Description ' },
    _: 'data should ...'
  }
};

const uischema = {
  type: 'Categorization',
  elements: [
    {
      type: 'Category',
      label: 'Study Identification',
      elements: [
        {
          type: 'VerticalLayout',
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
            },
            {
              type: 'Control',
              label: 'Instructions',
              scope: '#/properties/instructions'
            },
            {
              type: 'Control',
              label: 'Number of times each entry needs to be tagged (default 1)',
              scope: '#/properties/times'
            }
          ]
        }
      ]
    },
    {
      type: 'Category',
      label: 'Construct Tagging Interface',
      elements: [
        {
          type: 'VerticalLayout',
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
            },
            {
              type: 'Control',
              label: 'Tag',
              scope: '#/properties/tag'
            }
          ]
        }
      ]
    }
  ],
  options: {
    variant: 'stepper',
    showNavButtons: true
  }
};

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

  return (
    <Container sx={{ left: '5%', width: '90%', top: '100px', position: 'absolute' }}>
      <JsonForms schema={schema} uischema={uischema} data={data} renderers={materialRenderers} cells={materialCells} onChange={({ data }) => handleChange(data)} />
    </Container>
  );
};

export { NewStudy };
