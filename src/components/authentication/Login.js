import React, { Component } from 'react'
import LoginManager from "../dataManager/LoginManager"
import "./Login.css"
import { Link } from "react-router-dom";

export default class Login extends Component {
    // set initial state
    state = {
        email: "",
        password: ""

    };
    //   function to handle input field change and set the state with the values user has entered
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange);
    }

//     In handleLogin function will fetch the user from database.JSON with credentials (email and password) that user has entered and which are currently in state and then checks if credentials matches with the users in database.JSON.
    handleLogin = (event) => {
        event.preventDefault()
        console.log(this.state.email, this.state.password)
        LoginManager.getUser(`users?email=${this.state.email}&password=${this.state.password}`)
            .then(user => {
    //   In this if condition user.length will verify if the length is greater then zero that means user with the credentials exists and if it is zero means there is no user with those credentials in users array in database. if it is grater then zero then condition will next verifies if the password enterd by user match with the passward in users at index zero.
                if (user.length > 0 && this.state.password === user[0].password) {
            // if the above condition is true then it will sets the state with the userId that has been verified from database. And then saves stringified object of user credentials in session storage.      
                    this.setState({ userId: user[0].id });

                    console.log("user", user);
                  
                    let loginObj = JSON.stringify({


                        email: this.state.email,
                        password: this.state.password,
                        userId: this.state.userId
                    })
                    console.log(loginObj)
                    // sessionStorage.setItem("user " ,this.state.userId)
                    sessionStorage.setItem("userInfo", loginObj);
                     console.log("info matched")
                     this.props.getloggedUserMealsGroceries()

                    // let testId= sessionStorage.getItem("user")
                    // this.props.getAll(testId)
                    
                     this.props.history.push("/meal")
                
                }
                // If the user info does not matchs with users in database.JSON then this else will alert the user.
                else {
                    alert(
                        "Incorrect email/Password Or You are not Registered. Please Register!!"
                    );
                }
            })
            

    }
    render() {
        return (

            <div className="login-page">

                <div className="forms">
                    <div className="loginForm">
                        <form onSubmit={this.handleLogin}>
                            <h2 className="header"> Please Login </h2>
                            <div className="loginField">

                                <label>Email</label>
                                <input
                                    id="email"


                                    type="email"
                                    placeholder="Email Address"
                                    onChange={this.handleFieldChange} />

                                <label>Password</label>
                                <input
                                    id="password"
                                    type="password"


                                    placeholder="Password"
                                    onChange={this.handleFieldChange} />

                                <button
                                    type="submit">
                                    Submit
                                </button>

                            </div>
                            <div><Link className="Register" to={{ pathname: "/Register"}}>Register</Link></div>
                        </form>
                    </div>   
                </div>
            </div>

        )
    }
}