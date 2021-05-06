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
                <div className="homepage">
                    <h1>Secunderabad Steel Syndicate</h1>
                    <DisplayCategories />
                </div>
                 );
        }
}
  
  export default connect()(Homepage)