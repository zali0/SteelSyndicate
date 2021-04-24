import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import DisplayCategories from '../components/DisplayCategories';
import './Homepage.css';

class Homepage extends React.Component {
    render() {
            return(
                <Fragment>
                    <h1>Secunderabad Steel Syndicate</h1>
                    {this.props.logged}
                    <DisplayCategories />
                </Fragment>
                 );
        }
}

function mapStateToProps(state) {
    // const { isLogged } = state
    console.log(state.logged)

    return { logged: state.logged }
  }
  
  export default connect(mapStateToProps)(Homepage)