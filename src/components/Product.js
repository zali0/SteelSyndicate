import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

class Product extends React.Component {
    render() {
        const {id, name, image, dimensions, unit, stock, category} =  this.props;
        return(
            <div className="product">
                <img  className="image" alt="Image of the product" src={image}/>
                <div className="column">
                    <p className="name">{name}</p>
                    <p className="dimensions">{category}</p>
                    <p className="dimensions">{dimensions}<small> {unit}</small></p>
                    <p className="stock">{stock}<small style={{color: '#000'}}>pcs</small></p>
                    <Link className="record" to={`/products/${id}`}>Records</Link>
                </div>
            </div>
        );
    }
}

export default Product;