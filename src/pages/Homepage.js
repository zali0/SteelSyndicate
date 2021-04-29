import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import DisplayCategories from '../components/DisplayCategories';
import './Homepage.css';

class Homepage extends React.Component {
    render() {
            return(
                <Fragment>
                    <h1>Secunderabad Steel Syndicate</h1>
                    <DisplayCategories />
                </Fragment>
                 );
        }
}

function mapStateToProps(state) {
  }
  
  export default connect(mapStateToProps)(Homepage)