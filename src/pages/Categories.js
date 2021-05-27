import React, { Component } from 'react'
import { connect } from 'react-redux';
import store from '..';
import { getDataAction } from '../actions';
import Navbar from '../components/Navbar';
import MediaCard from './Card';
import './Categories.css';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: ''
        }
    }
    onNameChange = (event) => {
        let trimmedText = event.target.value.split(" ").join("_");
        this.setState({name: trimmedText})
    }
    onImageChange = (event) => {
        this.setState({image: event.target.value});
    }
    addCategory = () => {
        if(this.state.name === "" || this.state.image === "") {
            console.log("Please fill in the blanks!");
            return;
        }
        fetch('https://quiet-taiga-70836.herokuapp.com/addCategory', {
        method: "POST",
        body: JSON.stringify({
            id: this.props.user.companyid,
            name: this.state.name,
            image: this.state.image
      }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        store.dispatch(getDataAction(this.props.user.companyid))
    })
    setTimeout(function(){ 
      
    },500);
    }
    displayCategories= () => {
        console.log("WHATS THE PROBLEM");
        console.log(this.props.categories);
        return(
            this.props.categories.map((category, id) => {
                console.log(category.name)
                return(
                    <MediaCard key={id}name={category.name} image={category.image} />
                )
            })
        );
        
    }
    
    render() {
       
        if(this.props.user.companyid && this.props.categories)
        return (
            <div>
                <Navbar />
                <div className="displayCards">
                    {this.displayCategories()}
                </div>
                <div className="addCategory">
                    <p>Category Name: </p>
                    <input onChange={ this.onNameChange} type="text"/>
                    <p>Image: </p>
                    <input onChange={ this.onImageChange} type="text"/>
                    <button className="buttn" onClick={ this.addCategory}>Add Category</button>
                </div>
            </div>
        )
        else{
            return(
                <h1>LOADING</h1>
            )
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        categories: state.data.categories,
        user: state.user,
    };
}

export default connect(mapStateToProps)(Categories)
