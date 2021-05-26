import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchData, getDataAction, userInfo } from "../actions";
import store from '../index';
import './Login.css';

let shouldLogin = false;

<style>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');
</style>

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            password: '',
            redirect: false
              
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
    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/home' />
          }
      }
    onSubmit = () => {
        fetch('https://quiet-taiga-70836.herokuapp.com/signin', {
            method: "GET",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(user => {
            if(user !== "error") {
                console.log("IN THE LOGIN FETCH")
                console.log(user);
                shouldLogin = true;
                // store.dispatch(getDataAction());
                // this.props.getDataAction();
                // this.props.dispatch({ type: 'DATA_REQUESTED' });
                store.dispatch(userInfo(user));
                console.log("THE USERS COMPANY ID")
                console.log(user.companyid)
                store.dispatch(getDataAction(user.id));
                this.setState({
                    redirect: true
                  });         
            }
            else {
                shouldLogin = false;
            }
        });
        if(shouldLogin) {
                return <Redirect to="/home" />
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
                {/* <div className=""> */}
                    <h1>Ventory</h1>
                    <div className="loginForm">
                        <div className="flex"> 
                            <label for="email">Email: </label>
                            <input onChange={this.onEmailChange} type="email" name="email" id="email"/>
                        </div>
                        <div className="flex"> 
                            <label for="password">Password: </label>
                            <input onChange={this.onPasswordChange} type="password" name="password" id="password"/>
                        </div>
                        {/* {this.inCorrect()} */}
                        {this.renderRedirect()}
                        {/* <button onClick={this.setRedirect}>Login</button> */}
                        <p onClick={this.onSubmit} className="submit" to="/home">Login</p>
                        <Link className="submit" to="/register">Register</Link>
                    </div>
                {/* </div> */}
                    
                </div>
            );
        }
}

function mapStateToProps(state) {
    // const { isLogged } = state
    console.log(state.logged)

    return { logged: state.logged }
}
  
// const mapDispatchToProps = {
//     getDataAction,
//    };
   
export default connect(mapStateToProps)(Login);