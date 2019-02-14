import React, { Component } from 'react'
import { Link } from "react-router-dom";


class MealList extends Component {
    render() {
        console.log(this.props.meals)
    //    deleteThisMeal =()=>{
    //     this.props.deleteMeal
    //     .then(() => MealManager.getAll())
    //     .then(allMeals => this.setState({
    //       meals: allMeals
    //     })
    //     )

    //    }

        return (
            <React.Fragment>

                <div className="list">

                    <section className="meal">
                        {
                            this.props.meals.map(meal =>
                            
                                <div className="eachMealListItem" key={meal.id}>
                                    {/* <hr></hr> */}
                                    <h3>{meal.day ? meal.day.name : ""}</h3>
                                    {/* <h3>{meal.day.name}</h3> */}

                                    <h4>BreakFast -{meal.breakFast} </h4>
                                    
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
            </React.Fragment>
        )
    }
}

export default MealList