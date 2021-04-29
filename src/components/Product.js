import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

class Product extends React.Component {
    render() {
        const {name, image, dimensions, unit, stock} =  this.props
        return(
            <div className="product">
                <img  className="image" alt="Centering Sheet" src={image}/>
                <div className="column">
                    <p>{name}</p>
                    <p>{dimensions}<small>{unit}</small></p>
                    <p className="stock">{stock}<small>pcs</small></p>
                    <Link className="details" to="/products/2">Details</Link>
                </div>
            </div>
        );
    }
}

export default Product;