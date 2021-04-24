import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import add from '../images/add.png'
import './Category.css';
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

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onAdd = () => {
    // console.log("CLICK")
    // id:1,
    // name: "Centering Sheet",
    // category: "Centering Sheets",
    // dimensions: "2' x 3'",
    // unit: "Angular",
    // stock: 12
    
}
  return (
    <div style= {{ display: "flex"}}>
      <div onClick={handleOpen} className="add">
        <img onClick={onAdd} src={add} alt={"Add"} />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
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
          {/* id:1,
        name: "Centering Sheet",
        category: "Centering Sheets",
        dimensions: "2' x 3'",
        unit: "Angular",
        stock: 12*/}
        Date: <input type="date"/><br/>
        Produced: <input type="text"/><br/>
        Sold: <input type="text"/><br/>
        Current: <input type="text"/><br/>
            <button>Add Field</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}