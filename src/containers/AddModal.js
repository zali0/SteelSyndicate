import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import add from '../images/add.png'
import './Category.css';
import './AddModal.css';
import { connect, useDispatch } from 'react-redux';
import { addProduct, fetchData,getDataAction } from '../actions';
import store from '../index';

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

function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const [name, setName] = useState("");
const [category, setCategory] = useState("Pipes");
const [dimensions, setDimensions] = useState("");
const [unit, setUnit] = useState("");
const [stock, setStock] = useState("");


  const dispatch = useDispatch();
const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("PROPSSSSSSSS")
    console.log(props.user.id)
    let companyid = props.user.companyid;
    fetch('http://localhost:3003/addProduct', {
            method: "POST",
            body: JSON.stringify({
              companyid,
              name,
              category,
              dimensions,
              unit,
              stock
          }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        setTimeout(function(){ 
          store.dispatch(getDataAction(props.user.companyid)); 
        },500);


}
  return (
    <div className="addModal" style= {{ display: "flex"}}>
      <div onClick={handleOpen} className="add">
        <img src={add} alt={"Add"} />
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
            <form className="addProductForm" onSubmit={handleSubmit}>
      <div className="flex"> 
        <label for="name">Name: </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="flex"> 
        <label for="category">Category: </label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
        ["Pipes", "Centering Sheets", "Column Box", "Bridge 40mm" , "Bridge 50mm", "Scaffolders", "Accessories"];
          <option selected value="Pipes">Pipes</option>
          <option value="Centering Sheets">Centering Sheets</option>
          <option value="Column Box">Column Box</option>
          <option value="Bridge 40mm">Bridge 40mm</option>
          <option value="Bridge 50mm">Bridge 50mm</option>
          <option value="Scaffolders">Scaffolders</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="flex"> 
        <label for="dimensions">Dimensions: </label>
        <input
          type="text"
          value={dimensions}
          onChange={e => setDimensions(e.target.value)}
          placeholder={"Vertical 3, 2' x 3'."}
        />
      </div>
      <div className="flex"> 
      <label for="unit">Unit: </label>
        <input
          type="text"
          value={unit}
          onChange={e => setUnit(e.target.value)}
          placeholder={"mt, angular, inches."}
        />
      </div>
      <div className="flex"> 
        <label for="stock">Stock: </label>
        <input
          type="number"
          value={stock}
          onChange={e => setStock(e.target.value)}
        />
      </div>
      <div style={{textAlign: 'center'}}>
        <input className="button" type="submit" value="Add Product" />
      </div>
    </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
      user: state.user
  };
}
export default connect(mapStateToProps)(TransitionsModal);
