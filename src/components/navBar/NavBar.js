import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {NavLink } from 'reactstrap';
import "./NavBar.css"

class NavBar extends Component {



logoutFunction = ()=>
    {
        sessionStorage.clear();
        window.location.href="http://localhost:5002";
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" id="home"to="/">Meal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/groceries">Grocery</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/drinks">Grocery</Link>
                    </li> */}
                    
                    
                    {/* <li className ="nav-item">
                    <NavLink href="#" onClick={this.logoutFunction} id="logout" >Logout</NavLink>
                    {/* <Link className="nav-link" id="logout" to="/Logout">Logout</Link> */}
                    {/* </li>  */}
                </ul>
               
            </nav>
            
        )
    }
}

export default NavBar 