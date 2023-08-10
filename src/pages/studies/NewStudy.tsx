import { Container, Typography, Stepper, Step, StepLabel, Button, TextField, Box } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { TagField, TagFieldType } from '../../models/TagField';
import { AslLexSignBankField, aslLexSignBankControlRendererTester } from '../../custom-fields/asl-lex-field';
import { fileListControlRendererTester, FileListField } from '../../custom-fields/file-list';
import { VideoOptionUpload, videoOptionUploadRendererTester } from '../../custom-fields/video-option-upload.component';
import { userVideoOptionRendererTester, UserVideoOption } from '../../custom-fields/user-video-option-field.component';
import { VideoFieldComponent, videoFieldTester } from '../../video-recording/components/video-field.component';
import { TagFieldGeneratorService } from '../../services/tag-field-generator.service';

const NewStudy: React.FC = () => {
  //all constants
  const [activeStep, setActiveStep] = React.useState(0);
  const [tagFields, setTagFields] = useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderers = [
    {
      tester: aslLexSignBankControlRendererTester,
      renderer: AslLexSignBankField
    },
    { tester: fileListControlRendererTester, renderer: FileListField },
    { tester: videoOptionUploadRendererTester, renderer: VideoOptionUpload },
    { tester: userVideoOptionRendererTester, renderer: UserVideoOption },
    { tester: videoFieldTester, renderer: VideoFieldComponent },
    { tester: oneOfFieldTester, renderer: OneOfField }
  ];

  const tagFieldOptions = [
    { type: TagFieldType.AslLex, name: 'ASL-LEX Sign', icon: 'accessibility' },
    { type: TagFieldType.AutoComplete, name: 'Categorical', icon: 'text_format' },
    { type: TagFieldType.BooleanOption, name: 'True/False Option', icon: 'flag' },
    { type: TagFieldType.EmbeddedVideoOption, name: 'Video Option', icon: 'video_library' },
    { type: TagFieldType.FreeText, name: 'Free Text', icon: 'text_fields' },
    { type: TagFieldType.Numeric, name: 'Numeric', icon: 'bar_chart' },
    { type: TagFieldType.Slider, name: 'Slider', icon: 'tune' },
    { type: TagFieldType.VideoRecord, name: 'Record Video', icon: 'videocam' }
  ];

  const steps = [
    {
      label: 'Study Identification',
      element: <TextField required margin="dense" id="name" label="Dataset Name" fullWidth InputLabelProps={{ shrink: true }} variant="standard" />
    },
    {
      label: 'Construct Tagging Interface',
      element: (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Button>Upload CSV</Button>
        </Box>
      )
    },
    {
      label: 'Select Tag Training',
      element: (
        <Button variant="outlined" sx={{ margin: '10px' }}>
          Upload Videos (ZIP)
        </Button>
      )
    }
  ];
  //all functions
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
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={step.label} {...stepProps}>
                <StepLabel {...labelProps}>{step.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
};

export { NewStudy };
