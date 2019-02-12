import { Route,Redirect} from "react-router-dom";
import React, { Component } from "react";
import MealCreateForm from './meal/MealCreateForm'
import GroceryCreateForm from './grocery/GroceryCreateForm'
import MealList from './meal/MealList'
// import GroceryList from './grocery/GroceryList'
import MealEditForm from './meal/MealEditForm'
import MealManager from './dataManager/MealManager'
import GroceryManager from './dataManager/GroceryManager'
import NabBar from './nav/NavBar'
// import "./WeeklyPlanner.css"

export default class ApplicationViews extends Component {

    state = {
        meals:[],
        days: [],
        groceries:[],
        groceryTypes:[]


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


        fetch("http://localhost:5002/groceryTypes")
        .then(r => r.json())
        .then(allTypes => newState.groceryTypes = allTypes)
        
        fetch("http://localhost:5002/groceries")
        .then(r => r.json())
        .then(allgroceries => newState.groceries = allgroceries)
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


        newGrocery = (newGrocery) => GroceryManager.post(newGrocery)
        .then(() => GroceryManager.getAll())
        .then(allGrocery => this.setState({
            groceries:allGrocery
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
            <React.Fragment >

                <Route
                 exact path="/"
                    render={props => {
                        return  <React.Fragment>
                        <MealCreateForm className="div" {...props} 
                                                    addMeal= {this.newMeal} 
                                                   days={this.state.days} 
                                              
                                                   />
                                                   
                         <MealList className="div" {...props}{...this.props} 
                                                    meals={this.state.meals} 
                                                   deleteMeal={this.deleteMeal}/>
                        </React.Fragment>
                    }}/>

                    

                    <Route
                      path="/:mealId(\d+)/edit" render={props => {
                      return <MealEditForm {...props} 
                      meals={this.state.meals} 
                      days={this.state.days} 
                      updateMeal={this.updateMeal}/>
          }} 
         />

          <Route
                 exact path="/grocery"
                    render={props => {
                        return  <React.Fragment>
                        <GroceryCreateForm className="div" {...props} 
                        addGrocery={this.newGrocery} 
                        groceryTypes={this.state.groceryTypes} 
                                              
                                                   />
                         {/* <GroceryList className="div" {...props}{...this.props} groceries={this.state.meals} deleteGrocery={this.deleteGrocery}/> */}
                        </React.Fragment>
                    }}/>
                    {/* <Route
                 exact path="/list"
                    render={props => {
                        return  <React.Fragment>
                        
                         <MealList className="div" {...props}{...this.props} 
                         meals={this.state.meals} 
                         deleteMeal={this.deleteMeal}/>
                        </React.Fragment>
                    }}/> */}


                    
         </React.Fragment>
           )
         }
}