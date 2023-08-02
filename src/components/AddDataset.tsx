import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ShowProps {
  show: boolean;
  toggleModal: () => void;
}

const AddDataset: React.FC<ShowProps> = (props: ShowProps) => {
  return (
    <div>
      <Dialog open={props.show} onClose={props.toggleModal}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>To subscribe to this website, please enter your email address here. We will send updates occasionally.</DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.toggleModal}>Cancel</Button>
          <Button onClick={props.toggleModal}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AddDataset };
