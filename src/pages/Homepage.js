import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import DisplayCategories from '../components/DisplayCategories';
import './Homepage.css';

class Homepage extends React.Component {
    
    render() {
            return(
                <div className="homepage">
                <br />
                    <div className="companyName">
                        <h1>Secunderabad Steel Syndicate</h1>
                        <hr className="underline"/>
                    </div>
                    <DisplayCategories />
                </div>
                 );
        }
}
  
const mapStateToProps = (state) => {
    console.log(state)
    return {
        products: state.data.products,
        status: state.data.status,
        // error: state.data.error
    };
}

export default connect(mapStateToProps)(Homepage)