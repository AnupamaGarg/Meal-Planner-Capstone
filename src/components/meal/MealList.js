import React, { Component } from 'react'
import { Link } from "react-router-dom";
import thumbnail_1 from "./thumbnail_small (1).png"
import image from "./mealNew2.jpg"
import "./meal.css"


class MealList extends Component {
    deleteThisMealList = () => {
        if (window.confirm("Do you really want to delete the menu for the whole week?")) {
            this.props.meals.forEach(meal =>
                this.props.deleteMeal(meal.id))
        }
    }



    render() {


        return (
            <React.Fragment>
                
                    <div className="listComponent" ref={el => (this.componentRef = el)}>

                        {/* <div className="card"><h2 className="card-title">My Meal Plan</h2>
                            {/* <img // src={image} className="image" /> */}
                            {/* <a href="#" id="deteleWholeList" onClick={this.deleteThisMealList}>Clear All </a> */}
                        {/* </div> */} 





                        <div className="meal">
                            {/* // className="card meal-card" */}
                            <div className="card intro-card">
                            {/* <h3 className="card-heading">My Meal Plan</h3> */}
                            <img  src={image} className="image" />
                            <a href="#" 
                            // class="deteleWholeList" 
                            id="mealClearAll" onClick={this.deleteThisMealList}>Clear All Meals </a>
                        </div>
                            
                        
                            {
                                this.props.meals.map(meal =>

                                    <div className="card" id={meal.day.name} key={meal.id}>
                                        <div className="card-body" >
                                        {/* <img src={thumbnail_1} className="icon--1" /> */}
                                            <h4 className="card-title">{meal.day ? meal.day.name : ""}</h4>
                                            {/* <h3>{meal.day.name}</h3> */}

                                            {/* <h4>BreakFast -{meal.breakFast} </h4> */}
                                            <h5>BreakFast</h5>
                                            <h6><i>{meal.breakFast} </i></h6>

                                            <h5>Lunch</h5>
                                            <h6><i>{meal.lunch} </i></h6>

                                            <h5>Dinner</h5>
                                            <h6><i>{meal.dinner} </i></h6>
                                        </div>
                                        <div className="links">
                                            <Link id="editLinkMeals"className="card-link-edit" to={`/meal/${meal.id}/edit`}>Edit</Link>



                                            <a href="#"
                                                onClick={() => this.props.deleteMeal(meal.id)}
                                                className="card-link" >Delete</a>
                                            <br></br>
                                        </div>









                                    </div>

                                )
                            }
                        </div>

                    </div>
                
            </React.Fragment>
        )
    }
}

export default MealList