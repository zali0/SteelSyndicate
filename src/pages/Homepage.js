import React, { Fragment } from 'react';
import DisplayCategories from '../components/DisplayCategories';
import './Homepage.css';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Fragment>
                <h1>Secunderabad Steel Syndicate</h1>
                <DisplayCategories />

            </Fragment>
        );
    }
}

export default Homepage;