import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {NavLink } from 'reactstrap'
import "./NavBar.css"

export default class NavBar extends Component {



logoutFunction = ()=>
    {
        sessionStorage.clear();
        window.location.href="http://localhost:3000";
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                {/* <li className="nav-item"> */}
                        {/* <Link className="nav-link" id="Home"to="/Home">Home</Link> */}
                    {/* </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" id="Meal"to="/meal">Meal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/grocery">Grocery</Link>
                    </li>
                    
                    
                    
                    <li className ="nav-item">
                    <NavLink href="#" onClick={this.logoutFunction} id="logout" >Logout</NavLink>
                     </li> 
                </ul>
               
            </nav>
            
        )
    }
}

