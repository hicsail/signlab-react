import { useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const NewProject: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [checkName, setCheckName] = useState(false);
  const [checkDescription, setCheckDescription] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e: any) => {
    setName(e.target.value);
    if (!name.match(/^[A-Za-z0-9 \s]*$/)) {
      setCheckName(true);
    } else {
      setCheckName(false);
    }
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
    if (description.length < 5) {
      setCheckDescription(true);
    } else {
      setCheckDescription(false);
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    if (checkName || checkDescription) {
      event.preventDefault();
      return;
    }
    //submit logic
    //redirect to next page
    navigate('/projectcontrol');
  };

  return (
    <Container sx={{ left: '5%', width: '90%', top: '225px', position: 'absolute' }}>
      <Typography
        variant="h5"
      >
        Create New Project
      </Typography>
      <FormControl onSubmit={(e) => e.preventDefault()} defaultValue={name} sx={{ position: 'absolute', left: '5%', width: '90%' }}>
        <FormLabel sx={{ textAlign: 'left' }}>Name</FormLabel>
        <TextField
          error={checkName}
          helperText={checkName && 'Project name should not contain any special characters'}
          required={true}
          sx={{ marginBottom: '10px' }}
          variant="outlined"
          onChange={handleNameChange}
        ></TextField>
        <FormLabel sx={{ textAlign: 'left' }}>Description</FormLabel>
        <TextField
          error={checkDescription}
          helperText={checkDescription && 'Project description should be longer than 5 characters'}
          required={true}
          type="text"
          variant="outlined"
          onChange={handleDescriptionChange}
        ></TextField>
      </FormControl>
      <Button
        disabled={checkName || checkDescription}
        onClick={handleSubmit}
        sx={{ color: 'white', bgcolor: '#2582f3', marginTop: '195px', position: 'absolute', right: '5%' }}
        variant="outlined"
      >
        Submit
      </Button>
    </Container>
  );
};

export { NewProject };
