import React, { Component } from "react"

export default class MealCreateForm extends Component {
    // Set initial state
    state = {
        breakFast: "",
        lunch: "",
        dinner: "",
        dayId: ""
        

    };






    handleFieldChange = evt => {
        const stateToChange = {}
        console.log(evt.target.id, evt.target.value);

        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    handleDropDownChange = evt => {
        const stateToChange = {}
        // console.log(evt.target.id, evt.target.value);

        stateToChange[evt.target.id] = parseInt(evt.target.value)
        this.setState(stateToChange)
    }

    constructNewMeal = evt => {
        evt.preventDefault()
        if (this.state.dayId === ""){
        window.alert("Please select the day")
    }else{
        const meal = {
            breakFast: this.state.breakFast,
            lunch: this.state.lunch,
            dinner: this.state.dinner,
            dayId: this.state.dayId
            // dayId: this.props.days.find(e=>e.name === this.state.day).id     
            }
            console.log( "Gives the meal object", meal)
        this.props.addMeal(meal).then(() => this.props.history.push("/"))
        }
    }
     render() {
        console.log(this.props.days)
        return (
            <React.Fragment>
                {/* <div>
                 <fieldset>
                    <label>BreakFast</label>
                    <input type="text" onChange={this.handleFieldChange} id ="bf" value = {this.state.breakFast}>
                </fieldset>
            </div> */}

                <form className="CreateMealForm">
                <div><b>Create Meal</b></div>
                    <div className="form-group">
                            <select required
                            className="form-control"
                            onChange={this.handleDropDownChange }
                            id="dayId">
                                <option value="">Select Day</option>
                                {this.props.days.map(e =>(
                                    <option key={e.id} value={e.id}>
                                    {e.name}
                                    </option>
                                ))}
                                </select>



                           
                    </div>
                    <div
                            className="form-group">
                            <label htmlFor="breakFast">BreakFast</label>
                            <input maxlength="25" 
                                type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="breakFast"
                                
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Lunch">Lunch</label>
                            <input maxlength="25" 
                                type="text" required
                                className="form-control"

                                onChange={this.handleFieldChange}
                                id="lunch"
                                
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">Dinner</label>
                            <input maxlength="25" 
                                type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="dinner"
                                
                            />



                           
                    </div>



                        <button type="Submit"
                            onClick={this.constructNewMeal} className="btn btn-primary">
                            save</button>

                        
                </form>
            </React.Fragment>
                )
            }
}