import { Box, Button, Grid, Typography } from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import BarChartIcon from '@mui/icons-material/BarChart';
import TuneIcon from '@mui/icons-material/Tune';
import VideocamIcon from '@mui/icons-material/Videocam';

const TagsDisplay: React.FC = () => {
  const buttons = [
    { title: 'ASL-LEX Sign', icon: <AccessibilityIcon /> },
    { title: 'Categorical', icon: <TextFormatIcon /> },
    { title: 'True/False Option', icon: <AssistantPhotoIcon /> },
    { title: 'Video Option', icon: <VideoLibraryIcon /> },
    { title: 'Free Text', icon: <TextFieldsIcon /> },
    { title: 'Numeric', icon: <BarChartIcon /> },
    { title: 'Slider', icon: <TuneIcon /> },
    { title: 'Record Video', icon: <VideocamIcon /> }
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box sx={{ height: 400, display: 'flex', flexDirection: 'column', justifyContext: 'space-between' }}>
          <Typography variant="h5">Tag Fields</Typography>
          {buttons.map((button: any) => (
            <Box key={button.title}>
              <Button size="large" sx={{ color: 'black', fontSize: '16px' }} startIcon={button.icon}>
                {button.title}
              </Button>
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ height: 400, bgcolor: '#fffdf0', textAlign: 'center' }}>Preview</Box>
      </Grid>
    </Grid>
  );
};

export { TagsDisplay };
