import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DownloadIcon from '@mui/icons-material/Download';
import { useRef, useState } from 'react';
import { Box, IconButton, Paper, Step, StepContent, StepLabel, Stepper, TextField, Typography } from '@mui/material';

interface ShowProps {
  show: boolean;
  toggleModal: () => void;
}

const steps = [
  {
    label: 'Select Dataset to Upload To',
    description: `Select Existing Dataset.`,
    element: <TextField required id="standard-basic" variant="standard" />
  },
  {
    label: 'Upload Information on Entries',
    description: '',
    element: (
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Button>Upload CSV</Button>
        <IconButton sx={{ color: 'darkgreen', marginLeft: '20px' }}>
          <DownloadIcon />
        </IconButton>
      </Box>
    )
  },
  {
    label: 'Upload Entry Videos',
    description: '',
    element: (
      <Button variant="outlined" sx={{ margin: '10px' }}>
        Upload Videos (ZIP)
      </Button>
    )
  }
];

const UploadEntries: React.FC<ShowProps> = (props: ShowProps) => {
  const [activeStep, setActiveStep] = useState(0);
  //const [stepCompleted, setCompleted] = useState({ step: 0, completed: false });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    /*if (stepCompleted.completed) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setCompleted({ step: activeStep, completed: false });
    }*/
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <Dialog open={props.show} onClose={props.toggleModal}>
        <DialogTitle sx={{ fontWeight: 'bold', marginTop: '10px' }}>New Entry Upload</DialogTitle>
        <DialogContent>
          <Box sx={{ minWidth: 400 }}>
            <Stepper sx={{ minWidth: 400 }} activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
                  <StepContent>
                    <Typography variant="body2">{step.description}</Typography>
                    {step.element ? step.element : null}
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ marginBottom: '15px', marginRight: '15px' }}>
          <Button onClick={props.toggleModal}>Cancel</Button>
          <Button variant="contained" onClick={props.toggleModal}>
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { UploadEntries };
