import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';

interface ShowProps {
  show: boolean;
  toggleModal: () => void;
}

const AddDataset: React.FC<ShowProps> = (props: ShowProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleChange = (event: any, type: string) => {
    const newValue = event.target.value;
    if (type == 'name') {
      setName(newValue);
    } else {
      setDescription(newValue);
    }
    if (name.length > 3 && description.length > 3) {
      setError(false);
      setCompleted(true);
    } else {
      setError(true);
      setCompleted(false);
    }
  };

  return (
    <div>
      <Dialog open={props.show} onClose={props.toggleModal}>
        <DialogTitle>Create New Dataset</DialogTitle>
        <DialogTitle sx={{ color: error ? 'red' : 'gray', fontSize: '12px', marginTop: '-20px', fontStyle: 'italic' }}>Name and Description are required</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={name}
            onChange={(e) => handleChange(e, 'name')}
            required
            margin="dense"
            id="name"
            label="Dataset Name"
            type="name"
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="standard"
          />
          <TextField
            autoFocus
            value={description}
            onChange={(e) => handleChange(e, 'description')}
            required
            margin="dense"
            id="description"
            label="Dataset Description"
            type="description"
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.toggleModal}>Cancel</Button>
          <Button onClick={completed ? props.toggleModal : () => ''}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AddDataset };
