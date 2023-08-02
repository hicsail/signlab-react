import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface ShowProps {
  show: boolean;
  toggleModal: () => void;
}

const AddDataset: React.FC<ShowProps> = (props: ShowProps) => {
  return (
    <div>
      <Dialog open={props.show} onClose={props.toggleModal}>
        <DialogTitle>Create New Dataset</DialogTitle>
        <DialogContent>
          <TextField autoFocus required margin="dense" id="name" label="Dataset Name" type="name" fullWidth variant="standard" />
          <TextField autoFocus required margin="dense" id="description" label="Dataset Description" type="description" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.toggleModal}>Cancel</Button>
          <Button onClick={props.toggleModal}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AddDataset };
