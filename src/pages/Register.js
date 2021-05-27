import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import logo  from './logo.png';
import './Login.css';

let shouldLogin = false;

<style>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');
</style>

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            email: '',
            password: ''
        }
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value});
        console.log(this.state.name)
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
        console.log(this.state.email)
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
        console.log(this.state.password)

    }
    onRegister = () => {
        if(this.state.name === "" || this.state.email === "" || this.state.password === "") {
            console.log("Please fill in the blanks!");
            return;
        }
        fetch('https://quiet-taiga-70836.herokuapp.com/register', {
            method: "POST",
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            if(json === "success") {
                shouldLogin = true;
            }
            else if(json=== "Unable to Join") {
                shouldLogin = false;
            }
        });
        if(shouldLogin) {
            return(
                <div>
                    <Redirect to="/login" />
                </div>
                
            )
        }
        else {
            return(
                <div>HELLO</div>
            )
        }
    }
    inCorrect () {
        if( shouldLogin === true )
        return(
            <p className="incorrect">The given email or password is not correct</p>
        )
        else {
            <div></div>
        }
    }
    render() {
            return(
                <div className="login">
                    <img src={logo} className="logo"/>
                    {/* <h1>inventoryZee</h1> */}
                    <div className="loginForm">
                    <p>Register</p>
                        <div className="flex"> 
                            <label for="email">Name: </label>
                            <input onChange={this.onNameChange} type="text" name="name" id="name"/>
                        </div>
                        <div className="flex"> 
                            <label for="email">Email: </label>
                            <input onChange={this.onEmailChange} type="email" name="email" id="email"/>
                        </div>
                        <div className="flex"> 
                            <label for="password">Password: </label>
                            <input onChange={this.onPasswordChange} type="password" name="password" id="password"/>
                        </div>
                        <Link onClick={this.onRegister} className="submit" to="/">Register</Link>
                    </div>
                </div>
            );
        }
}

function mapStateToProps(state) {
    // const { isLogged } = state
    console.log(state.logged)

    return { logged: state.logged }
}
  
export default connect(mapStateToProps)(Register);