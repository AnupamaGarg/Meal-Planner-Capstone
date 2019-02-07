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
                        <h3><i>Day</i></h3>
                        <p><b>{meal.breakFast}</b></p>
                        <p><b>{meal.lunch}</b></p>
                        <p><b>{meal.dinner}</b></p>
                        
                        
                        <a href="#"
                         onClick={() => this.props.deleteMeal(meal.id)}
                         className="card-link">Delete</a>
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