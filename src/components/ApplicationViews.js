import { Route,Redirect} from "react-router-dom";
import React, { Component } from "react";
import MealCreateForm from './meal/MealCreateForm'
import MealList from './meal/MealList'
import MealEditForm from './meal/MealEditForm'
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
        fetch("http://localhost:5002/meal")
        .then(r => r.json())
        .then(allMeals => newState.meal = allMeals)
        .then(() => this.setState(newState))
        console.log(newState)
    }
   
    deleteMeal = id => MealManager.delete(id)
    .then(() => MealManager.getAll())
    .then(allMeals => this.setState({
      meal: allMeals
    })
    )

    

     newMeal = (meal) => MealManager.post(meal)
        .then(() => MealManager.getAll())
        .then(allMeals => this.setState({
            meal: allMeals
        })
        )


        updateMeal = (mealId, editedMealObj) => {
            return MealManager.put(mealId, editedMealObj)
            .then(() => MealManager.getAll())
            .then(allMeals => {
              this.setState({
                meal: allMeals
              })
            });
          }
        




    render() {
        return (
            <React.Fragment>

                <Route
                 exact path="/"
                    render={props => {
                        return  <React.Fragment>
                        <MealCreateForm {...props} addMeal= {this.newMeal}  days={this.state.days} />
                         <MealList {...props}{...this.props} meals={this.state.meal} deleteMeal={this.deleteMeal} />
                        </React.Fragment>
                    }}/>

                    <Route
          path="/:mealId(\d+)/edit" render={props => {
            return <MealEditForm {...props} updateMeal={this.updateMeal}/>
          }}
        />

                    
         </React.Fragment>
           )
         }
}