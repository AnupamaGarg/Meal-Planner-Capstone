import { Route,Redirect} from "react-router-dom";
import React, { Component } from "react";
import MealCreateForm from './meal/MealCreateForm'
import MealAddForm from './meal/MealAddForm'
import MealManager from './dataManager/MealManager'
// import "./WeeklyPlanner.css"

export default class ApplicationViews extends Component {

    state = {
        meal:[],
        days: []

    }

    componentDidMount() {
      const newState = {}
        fetch("http://localhost:5002/days")
        .then(r => r.json())
        .then(alldays => newState.days = alldays)
        .then(() => this.setState(newState))
        console.log(newState)
    }
   

    

    

    newMeal = (meal) => MealManager.post(meal)
        .then(() => MealManager.getAll())
        .then(allMeals => this.setState({
            meal: allMeals
        })
        )




    render() {
        return (
            <React.Fragment>

                <Route
                 exact path="/"
                    render={props => {
                        return  <MealAddForm {...props} days={this.state.days} />
                
                    }}/>

                    <Route exact path="/new" render={props => {
          return <MealCreateForm {...props} 
          addMeal= {this.newMeal} />
        
          }}
      />
         </React.Fragment>
           )
         }
}