import { JsonForms } from '@jsonforms/react';
import Ajv from 'ajv';
import { Card, CardContent, Container, Typography } from '@mui/material';
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
  }, [field]);

  const handleChange = (data: any) => {
    field.setData(data);
    setJsonData(data);
  };
  //MuiInputBase-input
  return (
    <Card sx={{ width: '90%', height: '15%', margin: '45px 15px -15px 10px' }}>
      <Container sx={{ display: 'flex', flexDirection: 'column', margin: ' 5px 0px -16px -20px' }}>
        <Typography sx={{ margin: '5px 0px 2px 8px', fontSize: '24px' }}>{field.data.fieldName || 'Empty'}</Typography>
        <Typography sx={{ marginLeft: '8px', color: 'gray', fontWeight: 'medium', fontSize: '14px' }} variant="body2">
          {field.kindDisplay}
        </Typography>
      </Container>
      <CardContent>
        <Container
          sx={{
            '& .MuiInputBase-input': {
              fontSize: '16px'
            },
            '& .MuiFormLabel-root': {
              fontSize: '16px'
            },
            '& .MuiFormHelperText-root': {
              fontSize: '10px'
            },
            '& .MuiTypography-root': {
              fontSize: '15px'
            }
          }}
        >
          <JsonForms
            data={jsonData}
            onChange={({ data }) => handleChange(data)}
            schema={schema}
            uischema={uiSchema}
            renderers={[...materialRenderers]}
            cells={materialCells}
            ajv={ajv}
          />
        </Container>
      </CardContent>
    </Card>
  );
};
