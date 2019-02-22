import React, { Component } from "react"
import {Container, Button,  Title} from 'bloomer'
import { Link } from 'react-router-dom'
import "./Home.css"


export default class Home extends Component {
    render(){
    //Screen user sees on page load.
    return (

      
        <div className="container">
        
        <Container>
           <Container className="HomeCopy" pad={{vertical: 'none'}} 
          //  primary={true}
          >
        <Title isSize="1" className="home-headline">
          Weekly Meal Planner
          
        </Title>
        <h2>Plan what you want to eat this week :)</h2>
        <p tag="h2">To get started First Register or Sign-In</p>
        <Button>
            <Link className="SignIn"to={{
                pathname: "/Login"}}>
                Sign-in
            </Link>
        </Button>
        <Button>
            <Link className="Register" to={{
              pathname: "/Register"}}>
              Register
            </Link>
        </Button>
      </Container>
    </Container>
    </div>
  )
}
}