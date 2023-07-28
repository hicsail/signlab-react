import { FormControl, Input, InputLabel, Typography } from '@mui/material';

export const LoginPage = () => {
  return (
    <div style={{ margin: 10 }}>
      <Typography variant="h3" sx={{ position: 'absolute', top: '15%', width: '90%', left: '5%' }}>
        Log in here
      </Typography>
      <FormControl fullWidth color="success">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username" />
      </FormControl>
      <FormControl fullWidth margin="dense">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" />
      </FormControl>
    </div>
  );
};
