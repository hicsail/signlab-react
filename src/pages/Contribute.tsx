import { Container, Typography, Box, Stack } from '@mui/material';

const ContributePage = () => {
  const placeholder = ' ';
  return (
    <Container sx={{ left: '5%', width: '90%', top: '100px', position: 'absolute' }}>
      <Typography sx={{ left: '5%', position: 'absolute' }} variant="h5">
        Study:{placeholder}
      </Typography>
      <Box sx={{ position: 'absolute', width: '100%', top: '60px' }}>
        <Stack spacing={3} direction="column" sx={{ right: '5%', position: 'absolute' }}>
          <Typography variant="body1">Study Training</Typography>
          <Typography variant="body2">Study: </Typography>
          <Typography variant="body2">Description: </Typography>
          <Typography variant="body2">Instructions: </Typography>
          <Typography variant="body2">Training Complete! Reach out to your study administrator to get access to tagging</Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export { ContributePage };
