import { Route,Redirect} from "react-router-dom";
import React, { Component } from "react";
import MealCreateForm from './meal/MealCreateForm'
import MealList from './meal/MealList'
import MealEditForm from './meal/MealEditForm'
import MealManager from './dataManager/MealManager'
// import "./WeeklyPlanner.css"

export default class ApplicationViews extends Component {

    state = {
        meals:[],
        days: []


    }

    componentDidMount() {
      const newState = {}
        fetch("http://localhost:5002/days")
        .then(r => r.json())
        .then(alldays => newState.days = alldays)
        
        fetch("http://localhost:5002/meals?_expand=day&_sort=dayId")
        .then(r => r.json())
        .then(allMeals => newState.meals = allMeals)
        .then(() => this.setState(newState))
        console.log(newState)
    }
   
    deleteMeal = id => MealManager.delete(id)

    .then(() => MealManager.getAll())
    .then(allMeals => this.setState({
      meals: allMeals
    })
    )

    

     newMeal = (meal) => MealManager.post(meal)
        .then(() => MealManager.getAll())
        .then(allMeals => this.setState({
            meals:allMeals
        })
        )


        updateMeal = (mealId, editedMealObj) => {
            return MealManager.put(mealId, editedMealObj)
            .then(() => MealManager.getAll())
            .then(allMeals => {
              this.setState({
                meals: allMeals
              })
            });
          }
        




    render() {
        return (
            <React.Fragment className="divA">

                <Route
                 exact path="/"
                    render={props => {
                        return  <React.Fragment>
                        <MealCreateForm className="div" {...props} addMeal= {this.newMeal} 
                                                   days={this.state.days} 
                                                //    meals={this.state.meals}
                                                   />
                         <MealList className="div" {...props}{...this.props} meals={this.state.meals} deleteMeal={this.deleteMeal}/>
                        </React.Fragment>
                    }}/>

                    <Route
                      path="/:mealId(\d+)/edit" render={props => {
                      return <MealEditForm {...props} meals={this.state.meals} days={this.state.days} updateMeal={this.updateMeal}/>
          }} 
         />

                    
         </React.Fragment>
           )
         }
}