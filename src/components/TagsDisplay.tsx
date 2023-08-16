import { Box, Button, Grid, Typography } from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import BarChartIcon from '@mui/icons-material/BarChart';
import TuneIcon from '@mui/icons-material/Tune';
import VideocamIcon from '@mui/icons-material/Videocam';
import DeleteIcon from '@mui/icons-material/Delete';
import { materialRenderers } from '@jsonforms/material-renderers';
import { TagField, TagFieldType } from '../models/TagField';
import { TagFormPreviewDialog } from './TagFormPreview';
import { TagFieldGeneratorService } from '../services/tag-field-generator.service';
import { useState } from 'react';
import { TagFieldComponent } from './TagFieldComponent';

type TagPreviewInformation = {
  previewDataSchema: any;
  previewUiSchema: any;
  renderers: any;
};

const TagsDisplay: React.FC = () => {
  const [tagFields, setTagFields] = useState<TagField[]>([]);
  const [data, setData] = useState<TagPreviewInformation>({ previewDataSchema: {}, previewUiSchema: {}, renderers: [] });
  const [open, setOpen] = useState(false);
  const renderers = [...materialRenderers];

  const addTagField = (tagFieldType: TagFieldType) => {
    const field = TagFieldGeneratorService(tagFieldType);
    setTagFields([...tagFields, field]);
  };

  const removeField = (index: number) => {
    tagFields.splice(index, 1);
    setTagFields([...tagFields]);
  };

  const produceJSONForm = () => {
    const dataSchema: { type: string; properties: any; required: string[] } = { type: 'object', properties: {}, required: [] };
    const uiSchema: { type: string; elements: any[] } = { type: 'VerticalLayout', elements: [] };

    for (const tagField of tagFields) {
      dataSchema.properties = {
        ...dataSchema.properties,
        ...tagField.asDataProperty()
      };
      if (tagField.isRequired()) {
        dataSchema.required.push(tagField.getFieldName());
      }
      uiSchema.elements = [...uiSchema.elements, ...tagField.asUIProperty()];
    }

    return { dataSchema: dataSchema, uiSchema: uiSchema };
  };

  const openTagFormPreview = () => {
    const jsonForms = produceJSONForm();
    const data: TagPreviewInformation = {
      previewDataSchema: jsonForms.dataSchema,
      previewUiSchema: jsonForms.uiSchema,
      renderers: renderers
    };
    setData(data);
    setOpen(true);
  };

  const tagFieldOptions = [
    { name: 'ASL-LEX Sign', icon: <AccessibilityIcon />, type: TagFieldType.AslLex },
    { name: 'Categorical', icon: <TextFormatIcon />, type: TagFieldType.AutoComplete },
    { name: 'True/False Option', icon: <AssistantPhotoIcon />, type: TagFieldType.BooleanOption },
    { name: 'Video Option', icon: <VideoLibraryIcon />, type: TagFieldType.EmbeddedVideoOption },
    { name: 'Free Text', icon: <TextFieldsIcon />, type: TagFieldType.FreeText },
    { name: 'Numeric', icon: <BarChartIcon />, type: TagFieldType.Numeric },
    { name: 'Slider', icon: <TuneIcon />, type: TagFieldType.Slider },
    { name: 'Record Video', icon: <VideocamIcon />, type: TagFieldType.VideoRecord }
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box sx={{ height: 400, display: 'flex', flexDirection: 'column', justifyContext: 'space-between' }}>
          <Typography variant="h5">Tag Fields</Typography>
          {tagFieldOptions.map((button: any) => (
            <Box key={button.name}>
              <Button sx={{ color: 'black', fontSize: '16px' }} startIcon={button.icon} onClick={() => addTagField(button.type)}>
                {button.name}
              </Button>
            </Box>
          ))}
        </Box>
        <Button variant="outlined" sx={{ marginTop: '10px' }} onClick={openTagFormPreview}>
          Preview
        </Button>
      </Grid>
      <TagFormPreviewDialog data={data} clicked={open} />
      <Grid item xs={8}>
        <Box sx={{ height: 400, bgcolor: '#fffdf0', textAlign: 'center' }}>
          {tagFields.length > 0 ? (
            tagFields.map((value: TagField, index: number) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TagFieldComponent field={value} />
                <Button startIcon={<DeleteIcon />} onClick={() => removeField(index)} />
              </Box>
            ))
          ) : (
            <Box>No Tags Selected</Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export { TagsDisplay };
