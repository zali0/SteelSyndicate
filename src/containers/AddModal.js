import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import add from "../images/add.png";
import "./Category.css";
import "./AddModal.css";
import { connect, useDispatch } from "react-redux";
import { addProduct, fetchData, getDataAction } from "../actions";
import store from "../index";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
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
  const [category, setCategory] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [unit, setUnit] = useState("");
  const [stock, setStock] = useState("");
  const [redirect, setRedirect] = useState(false);
  // if(typeof props.categories[0] !== "undefined") {

  // }
  useEffect(() => {
    // Update the document title using the browser API
    if (props.categories.length) setCategory(props.categories[0].name);
  }, []);
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if (
    //   this.state.name === "" ||
    //   this.state.category === "" ||
    //   this.state.dimensions === "" ||
    //   this.state.unit === "" ||
    //   this.state.stock === ""
    // ) {
    //   console.log("Please fill in the blanks!");
    //   return;
    // }
    console.log("PROPSSSSSSSS");
    console.log(props.user.id);
    let companyid = props.user.companyid;
    fetch("https://quiet-taiga-70836.herokuapp.com/addProduct", {
      method: "POST",
      body: JSON.stringify({
        companyid,
        name,
        category,
        dimensions,
        unit,
        stock,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setTimeout(function () {
      console.log("Disppatching to the store");
      store.dispatch(getDataAction(props.user.companyid));
    }, 1000);
    setRedirect(true);
  };
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/categories" />;
    }
  };
  return (
    <div className="addModal" style={{ display: "flex" }}>
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
        BackdropProps={
          {
            // timeout: 500,
          }
        }
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form className="addProductForm" onSubmit={handleSubmit}>
              <div className="flex">
                <label for="name">Name: </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex">
                <label for="category">Category: </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {props.categories.map((category, id) => {
                    return (
                      <option value={`${category.name}`}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
                {/* ["Pipes", "Centering Sheets", "Column Box", "Bridge 40mm" , "Bridge 50mm", "Scaffolders", "Accessories"];
          <option selected value="Pipes">Pipes</option>
          <option value="Centering Sheets">Centering Sheets</option>
          <option value="Column Box">Column Box</option>
          <option value="Bridge 40mm">Bridge 40mm</option>
          <option value="Bridge 50mm">Bridge 50mm</option>
          <option value="Scaffolders">Scaffolders</option>
          <option value="Accessories">Accessories</option> */}
              </div>
              {renderRedirect()}
              <div className="flex">
                <label for="dimensions">Dimensions: </label>
                <input
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder={"Vertical 3, 2' x 3'."}
                />
              </div>
              <div className="flex">
                <label for="unit">Unit: </label>
                <input
                  type="text"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  placeholder={"mt, angular, inches."}
                />
              </div>
              <div className="flex">
                <label for="stock">Stock: </label>
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
              <div style={{ textAlign: "center" }}>
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
    categories: state.data.categories,
    products: state.data.products,
    user: state.user,
  };
};
export default connect(mapStateToProps)(TransitionsModal);
