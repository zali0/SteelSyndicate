import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import add from '../images/add.png'
import './Category.css';
import './AddModal.css';
import { useDispatch } from 'react-redux';
import { addProduct, fetchData } from '../actions';
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
const [name, setName] = useState("");
const [category, setCategory] = useState("Pipes");
const [dimensions, setDimensions] = useState("");
const [unit, setUnit] = useState("");
const [stock, setStock] = useState("");


  const dispatch = useDispatch();
const handleSubmit = (evt) => {
    // evt.preventDefault();
    console.log(`Submitting  ${name}`)
    console.log(`Submitting  ${category}`)
    console.log(`Submitting  ${dimensions}`)
    console.log(`Submitting  ${unit}`)
    console.log(`Submitting  ${stock}`)
    fetch('http://localhost:3003/addProduct', {
            method: "POST",
            body: JSON.stringify({
              id:1,
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
        fetch("http://localhost:3003/data")
        .then(response => response.json())
        .then(data=> dispatch(fetchData(data)));
}


  return (
    <div style= {{ display: "flex"}}>
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
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
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
      </label>
      <br />
      <label>
        Dimensions:
        <input
          type="text"
          value={dimensions}
          onChange={e => setDimensions(e.target.value)}
        />
      </label>
      <br />
      <label>
        Unit:
        <input
          type="text"
          value={unit}
          onChange={e => setUnit(e.target.value)}
        />
      </label>
      <br />
      <label>
        Stock:
        <input
          type="number"
          value={stock}
          onChange={e => setStock(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Add Product" />
    </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}