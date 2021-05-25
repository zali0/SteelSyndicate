import React from 'react';
import Category from '../containers/Category';
import { connect } from 'react-redux';

class DisplayCategories extends React.Component {
    componentDidMount() {
      }
    render() {
        if(this.props.status === "received") {
            let filteredProducts = [];
            return !this.props.categories.name ?
            <h1>LOADING</h1> :
                (
                    this.props.categories.name.map((category, i) => {
                        filteredProducts= [];
                        for(let i=0;i<this.props.products.length; ++i) {
                            if(category === this.props.products[i].category){
                                filteredProducts.push(this.props.products[i]);
                            }
                        }
                    return (
                        <Category key={i} categoryName={this.props.categories.name[i]} products={filteredProducts}/>
                    );
                    
                    }
                )
            ); 
        }
        else 
        return <div>Loadin..g!</div>
        
            
    }
    
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        categories: state.data.categories,
        products: state.data.products,
        status: state.data.status,
        // error: state.data.error
    };
}
 export default connect(mapStateToProps)(DisplayCategories)