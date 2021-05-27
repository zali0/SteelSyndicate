import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Navbar } from '../components/Navbar'
import Category from '../containers/Category';

export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: ""
        }
    }
    componentDidMount() {
        this.setState({products: this.props.products})
    }
    render() {
        if(this.props.user.name && this.state.products !== "")
        return (
            <div>
                <Navbar user={this.props.user}/>
                <Category categories={this.props.categories} categoryName={"Products"} products={this.state.products} />
            </div>
        )
        else {
            return (
                <div>Loading</div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.data.products,
        categories: state.data.categories,
        user: state.user,
    };
}

export default connect(mapStateToProps)(Products)

