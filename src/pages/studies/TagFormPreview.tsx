import { JsonForms } from '@jsonforms/react';
import { TagService } from '../../services/tag.service';
import { Button, Container, Dialog, DialogContent, Typography } from '@mui/material';
import { useState } from 'react';

type TagPreviewInformation = {
  previewDataSchema: any;
  previewUiSchema: any;
  renderers: any;
};

export const TagFormPreviewDialog = (data: TagPreviewInformation) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <DialogContent>
        <Container sx={{ flexDirection: 'row', alignContent: 'space-around' }}>
          <Container sx={{ background: 'black', width: '400px', height: '400px' }}>
            <Typography variant="body2" sx={{ color: 'white !important' }}>
              Your Video Will Appear Here
            </Typography>
          </Container>
          <JsonForms data={''} schema={data.previewDataSchema} uischema={data.previewUiSchema} renderers={data.renderers} />
        </Container>
        <DialogContent sx={{ alignContent: 'end' }}>
          <Button onClick={handleClose}>Close</Button>
        </DialogContent>
      </DialogContent>
    </Dialog>
  );
};
