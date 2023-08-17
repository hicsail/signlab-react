import { JsonForms } from '@jsonforms/react';
import Ajv from 'ajv';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { TagField } from '../models/TagField';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';
import { useEffect, useState } from 'react';
import { JsonSchema } from '@jsonforms/core';

interface FieldProps {
  field: TagField;
}

export const TagFieldComponent: React.FC<FieldProps> = ({ field }: FieldProps) => {
  const [jsonData, setJsonData] = useState({});
  const [schema, setSchema] = useState<JsonSchema>({});
  const [uiSchema, setUiSchema] = useState({ type: 'object' });
  const ajv = new Ajv({ allErrors: true, schemaId: 'id' });

  useEffect(() => {
    field.getDataSchema().then((value) => setSchema(value));
    setUiSchema(field.getUISchema());
  }, []);

  const handleChange = (data: any) => {
    field.setData(data);
    setJsonData(data);
  };

  return (
    <Card sx={{ maxWidth: 555, height: 200 }}>
      <Typography sx={{ margin: '15px 15px 2px 15px', fontSize: '25px' }}>{field.data.fieldName || 'Empty'}</Typography>
      <Typography sx={{ marginLeft: '15px', color: 'gray', fontWeight: 'medium' }} variant="body2">
        {field.kindDisplay}
      </Typography>
      <CardContent>
        <JsonForms
          data={jsonData}
          onChange={({ data }) => handleChange(data)}
          schema={schema}
          uischema={uiSchema}
          renderers={[...materialRenderers]}
          cells={materialCells}
          ajv={ajv}
        />
      </CardContent>
    </Card>
  );
};
