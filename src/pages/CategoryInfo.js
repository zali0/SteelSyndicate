import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar } from "../components/Navbar";
import Category from "../containers/Category";

export class CategoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProducts: "",
    };
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    let filteredProducts = [];
    console.log(params.name)
    for (let i = 0; i < this.props.products.length; ++i) {
      if (params.name === this.props.products[i].category) {
          filteredProducts.push(this.props.products[i])
      }
    }
    this.setState({ filteredProducts: filteredProducts });
  }

  render() {
      console.log("STate of category")
      console.log(this.state.filteredProducts)
    const {
      match: { params },
    } = this.props;
    if (
      typeof this.props.user.name !== "undefined" &&
      this.state.filteredProducts !== ""
    )
      return (
        <div>
          <Navbar user={this.props.user} />
          <Category
            categoryName={params.name}
            products={this.state.filteredProducts}
          />
        </div>
      );
    else {
      return <h3>Loading!!!!!</h3>;
    }
  }
}
const mapStateToProps = (state) => {
    console.log("this is the state of category")
  console.log(state);
  return {
    products: state.data.products,
    categories: state.data.categories,
    user: state.user,
  };
};

export default connect(mapStateToProps)(CategoryInfo);
