import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from '../components/Table'
import back from '../images/back.png'
import './ProductDescription.css';

class Homepage extends React.Component {
    constructor() {
        super();
        this.state =  {
            item: ""
        }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        fetch(`http://localhost:3003/product/${params.id}`)
        .then(response => response.json())
        .then(item=>  this.setState({item}));
       
    }
    render() {
        let array = [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 }
        ];
        // const { match: { params } } = this.props;
        console.log(this.state.item.record)
        const {name, image, id, dimensions, unit, stock, record} = this.state.item;
        return(
            <div className="productDescription">
                <h1>Secunderabad Steel Syndicate</h1>
                <Link to="/home"><img src={back} alt="Back Arrow" width={70}/></Link>
                <div className="front">
                    <img className="image" alt="Centering Sheet" src={image}/>
                    <div className="column">
                        <p className="name">{name}</p>
                        <p>{id}</p>
                        <p>{dimensions}<small>{unit}</small></p>
                        <p className="stock">{stock}<small>pcs</small></p>
                    </div>
                </div>
                <div className="frameDiv">
                {/* <iframe 
                className="frame"
                    src="https://onedrive.live.com/embed?cid=498E8FB21891ECAA&resid=498E8FB21891ECAA%212160&authkey=AATmeLzD4Or0XB8&em=2" 
                    frameborder="0" 
                    scrolling="no"> 
                </iframe> */}
                <Table id={id} record={record} />
                </div>
            </div>
        );
    }
}

export default Homepage;