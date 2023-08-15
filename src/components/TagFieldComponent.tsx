import { JsonForms } from '@jsonforms/react';
import Ajv from 'ajv';
import { Card, CardContent, CardHeader } from '@mui/material';
import { TagField } from '../models/TagField';
import { materialRenderers } from '@jsonforms/material-renderers';
import { useEffect, useState } from 'react';

interface FieldProps {
  field: TagField;
}

export const TagFieldComponent: React.FC<FieldProps> = ({ field }: FieldProps) => {
  const [data, setData] = useState({});
  const [schema, setSchema] = useState({});
  const [uiSchema, setUiSchema] = useState({ type: 'object' });
  const ajv = new Ajv({ allErrors: true, schemaId: 'id' });
  /*const handleErrors = (data: any) => {
    field.isValid = data.length == 0;
  };*/

  useEffect(() => {
    setSchema(field.getDataSchema());
    setUiSchema(field.getUISchema());
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader>{field.getFieldName() || 'Empty'}</CardHeader>
      <CardContent>
        <JsonForms data={data} onChange={(event) => setData(event.data)} schema={schema} uischema={uiSchema} renderers={...materialRenderers} ajv={ajv} />
      </CardContent>
    </Card>
  );
};
