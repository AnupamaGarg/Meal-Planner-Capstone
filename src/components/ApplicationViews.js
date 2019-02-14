import { Route,Redirect} from "react-router-dom";
import Register from './authentication/Register'
import React, { Component } from "react";
import MealCreateForm from './meal/MealCreateForm'
import GroceryCreateForm from './grocery/GroceryCreateForm'
import MealList from './meal/MealList'
import GroceryList from './grocery/GroceryList'
import MealEditForm from './meal/MealEditForm'
import GroceryEditForm from './grocery/GroceryEditForm'
import MealManager from './dataManager/MealManager'
import GroceryManager from './dataManager/GroceryManager'
import LoginManager from './dataManager/LoginManager'
import NavBar from './nav/NavBar'
// import "./WeeklyPlanner.css"

export default class ApplicationViews extends Component {

    state = {
        meals:[],
        days: [],
        groceries:[],
        types:[]
        


    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

    componentDidMount() {
      const newState = {}
        fetch("http://localhost:5002/days")
        .then(r => r.json())
        .then(alldays => newState.days = alldays)
        
        // fetch("http://localhost:5002/meals?_expand=day&_sort=dayId")
        // .then(r => r.json())
        MealManager.getAll()
        .then(allMeals => newState.meals = allMeals)
        .then(() => this.setState(newState))
        console.log(newState) 


        fetch("http://localhost:5002/types")
        .then(r => r.json())
        .then(allTypes => newState.types = allTypes)
        
        // fetch("http://localhost:5002/groceries?_expand=type")
        // .then(r => r.json())
        GroceryManager.getAll()
        .then(allgroceries => newState.groceries = allgroceries)
        .then(() => this.setState(newState))
        console.log(newState)

        LoginManager.getAll()
        .then(allUsers => newState.users = allUsers)


    }
   //////// DB calls Meal////////////////
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
        
  ////////////  DB calls Grocery //////

  newGrocery = (newGrocery) => GroceryManager.post(newGrocery)
        .then(() => GroceryManager.getAll())
        .then(allGroceries => this.setState({
            groceries:allGroceries
        })
        )

   deleteGrocery = id => GroceryManager.delete(id)
    .then(() => GroceryManager.getAll())
    .then(allGroceries => this.setState({
      groceries: allGroceries
    })
    )
  

    updateGrocery = (groceryId, editedGroceryObj) => {
      return GroceryManager.put(groceryId, editedGroceryObj)
      .then(() => GroceryManager.getAll())
      .then(allGroceries => {
        this.setState({
          groceries: allGroceries
        })
      });
    }



    render() {
        return (
            <React.Fragment >
              {/* <Route path="/register" component={Register} /> */}

                <Route
                 exact path="/"
                    render={props => {
                        return  <React.Fragment>
                        <MealCreateForm className="div" {...props} 
                         addMeal= {this.newMeal} 
                         days={this.state.days}
                         meals={this.state.meals} 
                         deleteMeal={this.deleteMeal}
                                              
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
                        types={this.state.types} 
                                              
                         />
                         <GroceryList className="div" {...props}{...this.props} 
                         groceries={this.state.groceries} 
                         deleteGrocery={this.deleteGrocery}
                         types={this.state.types}/>
                        </React.Fragment>
                    }}/>
             <Route
                      path="/:groceryId(\d+)/grocery/edit" render={props => {
                      return <GroceryEditForm {...props} 
                      // groceries={this.state.groceries} 
                      types={this.state.types} 
                      updateGrocery={this.updateGrocery}/>
          }} 
         />    

         {/* <Route exact path="/" render={props => {
    if (this.isAuthenticated()) {
        return <React.Fragment>
        <MealCreateForm className="div" {...props} 
         addMeal= {this.newMeal} 
         days={this.state.days} 
                              
         />

         <MealList className="div" {...props}{...this.props} 
           meals={this.state.meals} 
           deleteMeal={this.deleteMeal}/>
        </React.Fragment>
    
    } else {
        return <Redirect to="/register" />
    }
}} />  */}

                    

                    
         </React.Fragment>
           )
         }
}