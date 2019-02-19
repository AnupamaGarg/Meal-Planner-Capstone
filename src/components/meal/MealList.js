import React, { Component } from 'react'
import { Link } from "react-router-dom";


class MealList extends Component {
    deleteThisMealList =()=>{
        if (window.confirm("Do you really want to delete menu of the whole week?")) { 
            this.props.meals.forEach(meal=>
                this.props.deleteMeal(meal.id))
          }
       }
       
       
   
    render() {
    

        return (
            <React.Fragment>
                <div>
                <div><h2>My Meal Plan</h2> <button id="deteleWholeList" onClick={this.deleteThisMealList}>Clear All </button></div>

                <div className="list"  ref={el => (this.componentRef = el)}>
                

                    <section className="meal">
                        {
                            this.props.meals.map(meal =>
                            
                                <div id={meal.day.name} key={meal.id}>
                                    {/* <hr></hr> */}
                                    <h3>{meal.day ? meal.day.name : ""}</h3>
                                    {/* <h3>{meal.day.name}</h3> */}

                                    {/* <h4>BreakFast -{meal.breakFast} </h4> */}
                                    <h4>BreakFast</h4>
                                    <h4>{meal.breakFast} </h4>
                                    
                                    <h4>Lunch - {meal.lunch} </h4>
                
                                    <h4>Dinner -{meal.dinner} </h4>
                                    {/* <h5><b><i></i></b></h5> */}

                                    <a href="#"
                                        onClick={() => this.props.deleteMeal(meal.id)}
                                        className="card-link">Delete</a>
                                    <br></br>




                                    <Link className="nav-link" to={`/meal/${meal.id}/edit`}>Edit</Link>




                                    <hr></hr>
                                </div>

                            )
                        }
                    </section>

                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MealList