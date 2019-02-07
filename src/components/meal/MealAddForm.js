import React, { Component } from 'react'


class MealAddForm extends Component {
    render() {
        console.log(this.props.days)

        return (
            <React.Fragment>
                <section>
            {
                this.props.days.map(day =>
                    <div key={day.Id}>
                        <h2>{day.dayName}</h2>
                        <p><b>BreakFast</b></p>
                        <p><b>Lunch</b></p>
                        <p><b>Dinner</b></p>
                        <div className="addButton">
                           <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/new")}
                            }>Add Meal
                            </button>
                        </div>
                    </div>
                    
                )
            }
            </section>
        
            </React.Fragment>
        )
    }
}

export default MealAddForm