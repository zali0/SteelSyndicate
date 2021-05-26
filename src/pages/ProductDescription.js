import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Table from '../components/Table'
import back from '../images/back.png'
import './ProductDescription.css';

class ProductDescription extends React.Component {
    constructor() {
        super();
        this.state =  {
            item: "",
            record: ""
        }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        for(let i = 0; i< this.props.products.length; ++i) {
            console.log("MAN THE ID")
            console.log(params.id , "=", this.props.products[i].id)
            if(Number(params.id) === Number(this.props.products[i].id)) {
                console.log("FOUND IT!")
                console.log(this.props.products[i])
                let item = this.props.products[i];
                this.setState({item: item})
            }
        }

        fetch(`https://cors-anywhere.herokuapp.com/https://quiet-taiga-70836.herokuapp.com/getRecord/${params.id}`)
        .then(res=> res.json())
        .then(record => {
            this.setState({record: record})
        });
    }
    render() {
        console.log("THIS IS THE ITEM DATA")
        console.log(this.state.item)
        if(this.props.user.name) {
            const {name, image, id, dimensions, unit, stock, category} = this.state.item;
        return(
            <div className="productDescription">
                <Navbar user={this.props.user} />
                <Link to="/products"><img src={back} alt="Back Arrow" width={70}/></Link>
                <div className="front">
                    <img className="image" alt="" src={image}/>
                    <div className="column">
                        <p className="name">{name}</p>
                        {/* <p className="dimensions">{category}</p> */}
                        <p className="dimensions">{dimensions}<small> {unit}</small></p>
                        <p className="stock">{stock}<small style={{color: '#000'}}>pcs</small></p>
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
        // error: state.data.error
    };
}

export default connect(mapStateToProps)(ProductDescription);