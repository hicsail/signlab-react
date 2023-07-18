import { Container, Typography, Box, Stack, Button } from '@mui/material';
import placeholder from './placeholder.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ContributePage: React.FC = () => {
  const initialData = {
    image: placeholder,
    name: 'Study 12',
    description: 'This study focuses on the verb conjugation',
    instructions: 'Analyze common verb conjugations and recognize a pattern',
    complete: false
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    //submit logic
    //redirect to next page

    navigate('/tagging');
  };

  return (
    <Container sx={{ left: '5%', width: '90%', top: '100px', position: 'absolute' }}>
      <Typography sx={{ left: '5%', position: 'absolute' }} variant="h5">
        Study: {initialData.name}
      </Typography>

      <Box sx={{ position: 'absolute', width: '100%', top: '60px' }}>
        {initialData.image && <img src={initialData.image} style={{ position: 'absolute', width: '45%', left: '1%' }} />}
        <Stack spacing={3} direction="column" sx={{ width: '45%', right: '1%', position: 'absolute' }}>
          <Typography variant="body1" sx={{ textAlign: 'left' }}>
            {initialData.complete ? 'Study Training' : 'Study Tagging'}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'left' }}>
            Study: {initialData.name}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'left' }}>
            Description: {initialData.description}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'left' }}>
            Instructions: {initialData.instructions}
          </Typography>
          {initialData.complete ? (
            <Typography variant="body2" sx={{ textAlign: 'left' }}>
              Training Complete! Reach out to your study administrator to get access to tagging
            </Typography>
          ) : (
            <Button variant="outlined" sx={{ width: '40%', color: 'black' }} onClick={handleSubmit}>
              Enter tagging
            </Button>
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export { ContributePage };
