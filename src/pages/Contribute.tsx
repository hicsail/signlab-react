import { Container, Typography, Box, Stack, Button } from '@mui/material';
import placeholder from './placeholder.png';
import { useNavigate } from 'react-router-dom';

const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      items: {
        type: 'object',
        title: 'Users',
        properties: {
          firstname: {
            type: 'string'
          },
          lastname: {
            type: 'string'
          },
          email: {
            type: 'string',
            format: 'email'
          },
          age: {
            type: 'number',
            minimum: 0
          }
        },
        required: ['firstname']
      }
    }
  }
};

const uischema = {
  type: 'ListWithDetail',
  scope: '#/properties/users',
  options: {
    detail: {
      type: 'VerticalLayout',
      elements: [
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/firstname',
              label: 'First Name'
            },
            {
              type: 'Control',
              scope: '#/properties/lastname',
              label: 'Last Name'
            }
          ]
        },
        {
          type: 'Control',
          scope: '#/properties/age',
          label: 'Age'
        },
        {
          type: 'Control',
          scope: '#/properties/email',
          label: 'Email'
        }
      ]
    }
  }
};

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

    navigate('/tagging', { state: { schema: schema, uischema: uischema } });
  };

  return (
    <Container sx={{ left: '5%', width: '90%', top: '100px', position: 'absolute' }}>
      <Typography sx={{ left: '2%', position: 'absolute' }} variant="h5">
        Study: {initialData.name}
      </Typography>
      <Box sx={{ position: 'absolute', width: '100%', top: '60px' }}>
        {initialData.image && <img src={initialData.image} style={{ position: 'absolute', width: '45%', left: '1%' }} />}
        <Stack spacing={3} direction="column" sx={{ width: '45%', right: '1%', position: 'absolute' }}>
          <Typography variant="body1">{initialData.complete ? 'Study Training' : 'Study Tagging'}</Typography>
          <Typography variant="body2">Study: {initialData.name}</Typography>
          <Typography variant="body2">Description: {initialData.description}</Typography>
          <Typography variant="body2">Instructions: {initialData.instructions}</Typography>
          {initialData.complete ? (
            <Typography variant="body2">Training Complete! Reach out to your study administrator to get access to tagging</Typography>
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
