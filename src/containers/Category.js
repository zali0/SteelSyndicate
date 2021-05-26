import React from 'react';
import { connect } from 'react-redux';
import DisplayProducts from '../components/DisplayProducts';
import AddModal from './AddModal';
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
                    <input onChange={this.onSearchChange} placeholder={"Search Products"} className="search" type="text"/>
                </div>
                <hr/>
                <br />
                <div className="inline">
                    <DisplayProducts categories={this.props.categories} products={filteredProducts}/>
                    <AddModal categories={this.props.categories}/>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        categories: state.data.categories,
        user: state.user,
    };
}

export default connect(mapStateToProps)(Category);