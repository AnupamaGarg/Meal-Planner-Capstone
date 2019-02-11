import React, { Component } from "react"
import MealManager from '../dataManager/MealManager'

export default class MealEditForm extends Component {
    // Set initial state
    state = {
        breakFast: "",
        lunch: "",
        dinner: "",
        dayId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingMeal = evt => {
      evt.preventDefault()

      const existingMeal = {
            breakFast: this.state.breakFast,
            lunch: this.state.lunch,
            dinner: this.state.dinner,
            dayId: this.state.dayId        
            }

    this.props.updateMeal(this.props.match.params.mealId, existingMeal)
    .then(() => this.props.history.push("/"))      
    }

    componentDidMount() {
      MealManager.get(this.props.match.params.mealId)
      .then(meal => {
        this.setState({
            breakFast: meal.breakFast,
            lunch: meal.lunch,
            dinner: meal.dinner,
            dayId: meal.dayId  
        });
      });
    }


    render() {
        return (
            <React.Fragment>
                <form className="CreateMealForm">

                
                    <div
                            className="form-group">
                            <label htmlFor="breakFast">BreakFast</label>
                            <input maxlength="25" 
                                 type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="breakFast"
                                value={this.state.breakFast}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Lunch">Lunch</label>
                            <input maxlength="25" 
                                type="text" required
                                className="form-control"

                                onChange={this.handleFieldChange}
                                id="lunch"
                                value={this.state.lunch}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">Dinner</label>
                            <input maxlength="25" 
                                type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="dinner"
                                value={this.state.dinner}
                            />
                        </div>
                      <button type="submit" onClick={this.updateExistingMeal} className="btn btn-primary">Save</button>
                </form>
            </React.Fragment>
        )
    }
}