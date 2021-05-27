import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog, faWarehouse, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import SettingsModal from '../pages/SettingsModal';
import { connect } from 'react-redux';
import logo  from './logo.png';
import './Navbar.css';

export class Navbar extends Component {
    render() {
        if(this.props.user.name) {
            return (
                <div>
                    <div className="navbar">
                            <div className="companyDetails">
                                    <img src={logo} className="navbarLogo"/>

                                <div>
                                    <h1 className="companyName">{this.props.user.name}</h1>
                                    <hr className="underline" />
                                </div>
                                <div className="address">
                                    <p>Secunderabad</p>
                                </div>
                               <div className="icons tooltip">
                                <NavLink
                                    to="/products"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <FontAwesomeIcon className="icon" icon={faWarehouse} />
                                </NavLink>
                                {/* <NavLink
                                    to="/companyinfo"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                                </NavLink> */}
                                <SettingsModal />
                               </div>
                            </div>
                        </div>
                        <div className="navbar2">
                            <ul>
                                <li>
                                    <Link className="link" to="/home">
                                       Home
                                    </Link>
                                </li>
                                <li>
                                   <Link className="link" to="/categories">
                                       Categories
                                    </Link>
                                </li>
                                <li>
                                <Link className="link" to="/products">
                                       Products
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                </div>
            )
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

export default connect(mapStateToProps)(Navbar)