import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from '../components/Table'
import back from '../images/back.png'
import './ProductDescription.css';

class Homepage extends React.Component {
    constructor() {
        super();
        this.state =  {
            item: "",
            record: ""
        }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        fetch(`http://localhost:3003/products/${params.id}`)
        .then(res=> res.json())
        .then(item => {
            this.setState({item})
            
        });

        fetch(`http://localhost:3003/getRecord/${params.id}`)
        .then(res=> res.json())
        .then(record => {
            this.setState({record: record})
        });
    }
    // this.setState({record: data.record})
    render() {
        let array = [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 }
        ];
        // const { match: { params } } = this.props;
        console.log(this.state.item)
        if(this.state.item !== "") {
            const {name, image, id, dimensions, unit, stock} = this.state.item;
        return(
            <div className="productDescription">
                <h1>Secunderabad Steel Syndicate</h1>
                <Link to="/home"><img src={back} alt="Back Arrow" width={70}/></Link>
                <div className="front">
                    <img className="image" alt="" src={image}/>
                    <div className="column">
                        <p className="name">{name}</p>
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
                <Table id={id} record={this.state.record} />
                </div>
            </div>
        );
        }
        else {
            return <h3>Loading</h3>
        }
    }
}

export default Homepage;