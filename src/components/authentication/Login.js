import React, { Component } from 'react'
import LoginManager from "../dataManager/LoginManager"
//import 'bulma/css/bulma.css';
import "./Login.css"

export default class Login extends Component {
    state = {
        email: "",
        password: ""
        // isChecked:false
    };
//gets the value of input fields
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange);
    }
//on button click checks database to see if user exists, then saves user information in local or session storage
    handleLogin = () => {
        console.log(this.state.email,this.state.password)
        LoginManager.getUser(`users?email=${this.state.email}&password=${this.state.password}`)
      .then(user => {
        // let loginUser = users.find(u => u.inputEmail === email && u.inputPassword === password)
        if (user.length > 0 && this.state.password === user[0].password) {
            this.setState({ userId: user[0].id });
            //const checkbox = document.getElementById("checkbox");
            console.log("user",user);

          let loginObj = JSON.stringify({
              
              email: this.state.email,
              password: this.state.password,
              userId: this.state.userId
            })
            console.log(loginObj)
            if (this.state.isChecked === true) {
                
                console.log(loginObj)
                localStorage.setItem("userInfo", loginObj);
                window.location.href="http://localhost:3000/meal"
                
            } else {
                console.log("hello")
                sessionStorage.setItem("userInfo", loginObj);
                
                
                window.location.href="http://localhost:3000/meal"
            }
        } 
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
                 {/* <label>Name</label>
                 <input 
                 id="name"
                 class="text"
                 type="name" 
                 placeholder="Type Your Name" 
                 onChange = {this.handleFieldChange} /> */}
                  <label>Email</label>
                 <input 
                 id="email"
                //  className="text"

                 type="email" 
                 placeholder="Email Address" 
                 onChange = {this.handleFieldChange} />

                 <label>Password</label>
                 <input 
                 id="password"
                 type="password"
                //  class="text"
 
                 placeholder="Password" 
                 onChange = {this.handleFieldChange}/>
                 {/* <label> Remember Me</label>
                 <input onClick={() => (this.setState({ isChecked: true }))} type="checkbox" id="myCheck" /> */}


                 {/* <input type="checkbox" id="checkbox" /> */}
                 <button  
                 type="submit">
                Submit
                </button>
                
                </div>
            </form>
            </div>
            </div>
            </div>
            
    )
         }
     }