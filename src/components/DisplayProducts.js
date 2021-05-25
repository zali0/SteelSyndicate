import React from 'react';
import Product from './Product';
import './DisplayProducts.css';

let image;

class DisplayProducts extends React.Component {

    render() {
        return !this.props.products ?
        <h1>LOADING</h1> :
            (
              <div className="displayProducts">
              {
                this.props.products.map((product, i) => {
                  for(let i=0;i<this.props.categories.length; ++i) {
                    if(this.props.products[i].category === this.props.categories[i].name) {
                      console.log(this.props.categories[i].name);
                      image = this.props.categories[i].image;
                    }
                  }
                  return (
                    <Product
                      key={i}
                      id={this.props.products[i].id}
                      name={this.props.products[i].name}
                      image={image}
                      category={this.props.products[i].category}
                      dimensions={this.props.products[i].dimensions}
                      unit={this.props.products[i].unit}
                      stock={this.props.products[i].stock}
                    />
                  );
                })
              }
              </div>
        ); 
    }
}


export default DisplayProducts;