import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

interface ShowProps {
  show: boolean;
  toggleModal: () => void;
}

const AddDataset: React.FC<ShowProps> = (props: ShowProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  //const [formErrors, setErrors] = useState({ name: '', description: '' });
  const [nameValid, setNameValid] = useState(false);
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const validateField = (fieldName: string, value: string) => {
    //let fieldValidationErrors = formErrors;
    switch (fieldName) {
      case 'name':
        setNameValid(value.length >= 2);
        //fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;
      case 'description':
        setDescriptionValid(value.length >= 2);
        //fieldValidationErrors.description = nameValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    //setErrors(fieldValidationErrors);
    validateForm();
  };

  const validateForm = () => {
    setFormValid(nameValid && descriptionValid);
  };

  const handleChange = (e: any, type: string) => {
    const value = e.target.value;
    if (type == 'name') {
      setName(value);
      validateField(type, value);
    } else {
      setDescription(value);
      validateField(type, value);
    }
  };

  return (
    <div>
      <Dialog open={props.show} onClose={props.toggleModal}>
        <DialogTitle>Create New Dataset</DialogTitle>
        <DialogTitle sx={{ color: formValid ? 'gray' : 'red', fontSize: '12px', marginTop: '-20px', fontStyle: 'italic' }}>Name and Description are required</DialogTitle>
        <DialogContent>
          <form className="addDataset">
            <TextField
              value={name}
              onChange={(event) => handleChange(event, 'name')}
              required
              margin="dense"
              id="name"
              label="Dataset Name"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="standard"
            />
            <TextField
              value={description}
              onChange={(event) => handleChange(event, 'description')}
              required
              margin="dense"
              id="description"
              label="Dataset Description"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <button onClick={props.toggleModal} type="submit">
            Cancel
          </button>
          <button disabled={!formValid} onClick={props.toggleModal} type="submit">
            Create
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AddDataset };
