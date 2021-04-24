import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/Table'
import image from '../images/image.jpg'
import back from '../images/back.png'
import './ProductDescription.css';

class Homepage extends React.Component {
    render() {
        let array = [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 }
        ];


        return(
            <div className="productDescription">
                <h1>Secunderabad Steel Syndicate</h1>
                <Link to="/"><img src={back} alt="Back Arrow" width={70}/></Link>
                <div className="front">
                    <img className="image" alt="Centering Sheet" src={image}/>
                    <div className="column">
                        <p className="name">Centering Sheet</p>
                        <p>2' x 3'<small> Angular</small></p>
                        <p className="stock">45<small>pcs</small></p>
                    </div>
                </div>
                <div className="frameDiv">
                {/* <iframe 
                className="frame"
                    src="https://onedrive.live.com/embed?cid=498E8FB21891ECAA&resid=498E8FB21891ECAA%212160&authkey=AATmeLzD4Or0XB8&em=2" 
                    frameborder="0" 
                    scrolling="no"> 
                </iframe> */}
                <Table />
                </div>
            </div>
        );
    }
}

export default Homepage;