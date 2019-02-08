import React, { Component } from 'react'


class MealList extends Component {
    render() {
        console.log(this.props.meals)

        
        return (
            <React.Fragment>
                <div className="list">
                
            <section className="meal">
            {
                this.props.meals.map(meal =>
                    <div className = "eachListDiv"key={meal.id}>
                        <hr></hr>
                        {/* <h3>{meal.day.dayName}</h3> */}

                        <p><b>BreakFast - {meal.breakFast}</b></p>
                        <p><b>Lunch - {meal.lunch}</b></p>
                        <p><b>Dinner - {meal.dinner}</b></p>
                        
                        
                        <a href="#"
                         onClick={() => this.props.deleteMeal(meal.id)}
                         className="card-link">Delete</a>
                         {/* <a href="#"
                         onClick={() => this.props.history(/:mealId(\d+)/edit)}
                         className="card-link">Edit</a>

                         <Link className="nav-link" to={`/${meal.id}/edit`}>Edit</Link> */}
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