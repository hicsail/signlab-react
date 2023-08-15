import { JsonForms } from '@jsonforms/react';
import { Button, Container, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useState } from 'react';

type TagPreviewInformation = {
  previewDataSchema: any;
  previewUiSchema: any;
  renderers: any;
};
interface DialogProps {
  data: TagPreviewInformation;
  clicked: boolean;
}

export const TagFormPreviewDialog: React.FC<DialogProps> = ({ data, clicked }: DialogProps) => {
  const initialData = {};
  const [open, setOpen] = useState(clicked);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Preview Tags</DialogTitle>
      <DialogContent>
        <Container sx={{ flexDirection: 'row', alignContent: 'space-around' }}>
          <Container sx={{ background: 'black', width: '400px', height: '400px' }}>
            <Typography variant="body2" sx={{ color: 'white !important' }}>
              Your Video Will Appear Here
            </Typography>
          </Container>
          <JsonForms data={initialData} schema={data.previewDataSchema} uischema={data.previewUiSchema} renderers={data.renderers} />
        </Container>
        <DialogContent sx={{ alignContent: 'end' }}>
          <Button onClick={handleClose}>Close</Button>
        </DialogContent>
      </DialogContent>
    </Dialog>
  );
};
