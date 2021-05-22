import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog, faWarehouse, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import DisplayCategories from '../components/DisplayCategories';
import './Homepage.css';
import { Link, NavLink } from 'react-router-dom';
import SettingsModal from './SettingsModal';
import Navbar from '../components/Navbar';

class Homepage extends React.Component {
    
    render() {
        if(this.props.user.name) {
            return(
                <div className="homepage">
                    <Navbar />
                {/* 2 navbars end */}
                    <div className="companyInfo">
                            <div className="col">
                                <p className="title">Inventory</p>
                                <p>Production: 10</p>
                            </div>
                            <div className="col">
                                <p className="title">Revenue</p>
                                <p>Production Cost: Rs 20000</p>
                                <p>Amount Generated: Rs 20000</p>
                                <p>Profit Generated: Rs 20000</p>
                            </div>
                        </div>
                    {/* <DisplayCategories /> */}
                    <div className="footer">
                        <p>&#169; All Rights Reserved by Ventory.com 2021</p>
                        <p>Developed by Zeeshan Ali</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="load">
                    <p>Please Login!</p>
                </div>
            )
        }
    }
}
  
const mapStateToProps = (state) => {
    console.log(state)
    return {
        products: state.data.products,
        user: state.user,
    };
}

export default connect(mapStateToProps)(Homepage)