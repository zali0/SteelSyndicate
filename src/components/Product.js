import React from 'react';
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
                    <p>Learn More</p>
                </div>
            </div>
        );
    }
}

export default Product;