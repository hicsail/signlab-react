/* import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import Ajv from 'ajv';

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      pattern: '^[a-zA-Z 0-9]*$',
      description: 'Please enter your name'
    },
    description: {
      type: 'string',
      description: 'Please enter your description'
    }
  },
  required: ['name', 'description'],
  errorMessage: {
    type: 'data should be an object',
    properties: { name: 'Project name should be ...', description: 'Description ahah' },
    _: 'data should ...'
  }
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

const ajv = new Ajv();
const validate = ajv.compile(schema);

const initialData = {
  name: '',
  description: ''
};

const [data, setData] = useState(initialData);

<JsonForms schema={schema} uischema={uischema} data={data} renderers={materialRenderers} cells={materialCells} onChange={({ data }) => setData(data)} />;
 */
