import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import dog from "../../image/123mealplan.jpg"
import "./meal.css"


class MealList extends Component {
    deleteThisMealList = () => {
        if (window.confirm("Do you really want to delete menu of the whole week?")) {
            this.props.meals.forEach(meal =>
                this.props.deleteMeal(meal.id))
        }
    }



    render() {


        return (
            <React.Fragment>
                <div className="listComponent" >
                <div className="list" ref={el => (this.componentRef = el)}>

                    <div className="card"><h2 className="card-title">My Meal Plan</h2> 
                    {/* <img // src={image} className="image" /> */}
                    <a href="#"  id="deteleWholeList" onClick={this.deleteThisMealList}>Clear All </a></div>


                    


                        <section
                            // className="card meal-card"
                            className="meal"
                        >
                            {
                                this.props.meals.map(meal =>

                                    <div className="card" id={meal.day.name} key={meal.id}>
                                        <div className="card-body" >
                                            <h3 className="card-title">{meal.day ? meal.day.name : ""}</h3>
                                            {/* <h3>{meal.day.name}</h3> */}

                                            {/* <h4>BreakFast -{meal.breakFast} </h4> */}
                                            <h4>BreakFast</h4>
                                            <h5><i>{meal.breakFast} </i></h5>

                                            <h4>Lunch</h4>
                                            <h5><i>{meal.lunch} </i></h5>

                                            <h4>Dinner</h4>
                                            <h5><i>{meal.dinner} </i></h5>
                                        </div>
                                        <div className="links">
                                            <Link className="nav-link" to={`/meal/${meal.id}/edit`}>Edit</Link>



                                            <a href="#"
                                                onClick={() => this.props.deleteMeal(meal.id)}
                                                className="card-link">Delete</a>
                                            <br></br>
                                        </div>









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