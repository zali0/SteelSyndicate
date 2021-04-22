import React from 'react';
import Category from '../containers/Category';
import {categories} from '../api';
import {products} from '../api';

class DisplayCategories extends React.Component {
    render() {
        let filteredProducts = [];
        return !categories ?
        <h1>LOADING</h1> :
            (
                categories.map((category, i) => {
                    filteredProducts= [];
                    for(let i=0;i<products.length; ++i) {
                        if(category === products[i].category){
                            console.log(category)
                            console.log(products[i].category)
                            filteredProducts.push(products[i]);
                            console.log(filteredProducts)
                        }
                    }
                    console.log("FILTERED ARRAY")
                    console.log(JSON.stringify(filteredProducts))
                  return (
                    <Category key={i} categoryName={categories[i]} products={filteredProducts}/>
                  );
                  
                }
            )
        ); 
            
    }
    
}

export default DisplayCategories;