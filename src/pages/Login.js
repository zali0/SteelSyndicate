import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';

let shouldLogin = false;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            password: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
        console.log(this.state.email)
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
        console.log(this.state.password)

    }
    authenticate () {
        
    }
    onSubmit () {
        fetch('http://localhost:3003/signin', {
            method: "POST",
            body: JSON.stringify({
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
            else {
                shouldLogin = false;
            }
        });
        if(shouldLogin) {
            return(
                <div>
                    {/* <Link className="valid" to="/home">Submit</Link> */}
                    <Redirect to="/home" />
                </div>
                
            )
        }
        else {
            return <Link className="valid" to="/">Submit</Link>

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
                    <h1>Ventory</h1>
                    <div>
                        <label for="email">Email: </label>
                        <input onChange={this.onEmailChange} type="email" name="email" id="email"/>
                        <br />
                        <label for="password">Password: </label>
                        <input onChange={this.onPasswordChange} type="password" name="password" id="password"/>
                        <br />
                        {this.inCorrect()}
                        {this.onSubmit()}
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
  
export default connect(mapStateToProps)(Login);