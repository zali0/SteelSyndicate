import React from 'react';
import DisplayProducts from '../components/DisplayProducts';
import './Category.css';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        console.log(this.props.categoryName)
        console.log(this.props.products)

        this.setState({products: this.props.products});
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        

    }
    render() {
        const {products, searchfield} = this.state;
        const {categoryName} = this.props
        const filteredProducts = products.filter(product =>{
            return product.dimensions.toLowerCase().includes(searchfield.toLowerCase());
          })
        return(
            <div className="category">
                <div className="top">
                    <p className="name">{categoryName}</p>
                    <input onChange={this.onSearchChange} className="search" type="text"/>
                </div>
                <div>
                    {/* <hr /> */}
                    <DisplayProducts products={filteredProducts}/>
                </div>
            </div>
        )
    }
}

export default Category;