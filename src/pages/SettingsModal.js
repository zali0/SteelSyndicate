import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog , faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import './SettingsModal.css';
import { Link } from 'react-router-dom';
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

  return (
    <div>
      <FontAwesomeIcon onClick={handleOpen} className="icon" icon={faUserCog}  />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={"settingsModal"}
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
            <h2 id="transition-modal-title">Settings</h2>
            {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
            <Link className="signOut" to="/">Log Out</Link>
            <FontAwesomeIcon onClick={handleOpen} className="icon" style={{marginLeft: '10px'}} icon={faSignOutAlt}  />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}