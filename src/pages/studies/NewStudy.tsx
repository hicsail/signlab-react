import { Container, Typography, Button, Box, Stepper, Step, StepLabel } from '@mui/material';
import React from 'react';
import { TagsDisplay } from '../../components/TagsDisplay';
import { NewStudyJsonForm } from '../../components/NewStudyJsonForm';
//import { AslLexSignBankField, aslLexSignBankControlRendererTester } from '../../custom-fields/asl-lex-field';
//import { fileListControlRendererTester, FileListField } from '../../custom-fields/file-list';
//import { VideoOptionUpload, videoOptionUploadRendererTester } from '../../custom-fields/video-option-upload.component';
//import { userVideoOptionRendererTester, UserVideoOption } from '../../custom-fields/user-video-option-field.component';
//import { VideoFieldComponent, videoFieldTester } from '../../video-recording/components/video-field.component';
//import { TagFieldGeneratorService } from '../../services/tag-field-generator.service';

const NewStudy: React.FC = () => {
  //all constants
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = ['Study Identification', 'Construct Tagging Interface', 'Select Tag Training Items'];

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <NewStudyJsonForm />;
      case 1:
        return <TagsDisplay />;
      case 2:
        return (
          <Button variant="outlined" sx={{ margin: '10px' }}>
            Upload Videos (ZIP)
          </Button>
        );
      default:
        return null;
    }
  }
  //sx={{ '& .MuiContainer-root': { width: '550rem' } }}
  return (
    <Container sx={{ position: 'absolute', left: '-5%', right: '-5%', alignItems: 'baseline', width: '100%', top: '100px', display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ margin: '10px 0px 15px 10px' }} variant="h5">
        Create New Study
      </Typography>
      <Container sx={{ maxWidth: 'xl' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - your new study is created</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Container maxWidth="lg" sx={{ height: '36rem', width: '100%' }}>
              {getSectionComponent()}
            </Container>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Button variant="outlined" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Container>
    </Container>
  );
};

export { NewStudy };
