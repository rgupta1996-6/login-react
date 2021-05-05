import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CreditBalance from '../pages/creditBalance';
import DebitBalance from '../pages/debitBalance';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteAccount from '../pages/deleteAccount';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const callbackMessage = (x,alertMessage) => {
    console.log(x,alertMessage);
    props.callbackMessage(x,alertMessage);
  };

  return (
    <div>
     {props.name==='Delete'?<DeleteIcon type="button" onClick={handleOpen}/>: <button type="button" onClick={handleOpen} className="btn btn-primary btn-sm btn-secondary">
       {props.name}
      </button>}
      <Modal
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div id="transition-modal-description">
               {props.name==='Credit Balance' && <CreditBalance tableData={props.tableData} accid={props.accid} setOpen={setOpen} callbackMessage={callbackMessage}/> }
               {props.name==='Debit Balance' && <DebitBalance tableData={props.tableData} accid={props.accid} setOpen={setOpen} callbackMessage={callbackMessage}/>  }
               {props.name==='Delete' && <DeleteAccount tableData={props.tableData} accid={props.accid} setOpen={setOpen}/>}
               </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}