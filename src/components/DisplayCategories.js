import React from 'react';
import Category from '../containers/Category';
import {categories} from '../api';
import { connect } from 'react-redux';

class DisplayCategories extends React.Component {
    componentDidMount() {
        // store.dispatch(getDataAction());
      }
    render() {
        if(this.props.status === "received") {
            let filteredProducts = [];
            return !categories ?
            <h1>LOADING</h1> :
                (
                    categories.map((category, i) => {
                        filteredProducts= [];
                        // console.log(JSON.stringify(this.props.products.length))
                        for(let i=0;i<this.props.products.length; ++i) {
                            // console.log(this.props.products[i])
                            //     console.log(this.props.products)

                            if(category === this.props.products[i].category){
                                // console.log(this.props.products[i])
                                // console.log(this.props.products)

                                filteredProducts.push(this.props.products[i]);
                            }
                        }
                        // console.log("FILTEREDD PRODUCTS")
                        // console.log(filteredProducts)
                    return (
                        <Category key={i} categoryName={categories[i]} products={filteredProducts}/>
                    );
                    
                    }
                )
            ); 
        }
        else 
        return <div>Loading!</div>
        
            
    }
    
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        products: state.data.products,
        status: state.data.status,
        // error: state.data.error
    };
}
 export default connect(mapStateToProps)(DisplayCategories)