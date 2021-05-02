import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import DisplayCategories from '../components/DisplayCategories';
import './Homepage.css';

class Homepage extends React.Component {
    componentDidMount() {
        // dispatch(addProduct(object))
    };
    render() {
            return(
                <Fragment>
                    <h1>Secunderabad Steel Syndicate</h1>
                    <DisplayCategories />
                </Fragment>
                 );
        }
}
  
  export default connect()(Homepage)