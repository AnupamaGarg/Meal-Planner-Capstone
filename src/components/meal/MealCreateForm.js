import React, { Component } from "react"

export default class MealCreateForm extends Component {
    // Set initial state
    state = {
      breakFast: "",
      lunch: "",
      dinner: ""

    }
   
  

   


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMeal = evt => {
        evt.preventDefault()
            const meal = {
                breakFast: this.state.breakFast,
                lunch: this.state.lunch,
                dinner: this.state.dinner          
            }
            this.props.addMeal(meal).then(() => this.props.history.push("/"))
        }


        



    render() {
        return (
            <React.Fragment>
                 {/* <div>
                 <fieldset>
                    <label>BreakFast</label>
                    <input type="text" onChange={this.handleFieldChange} id ="bf" value = {this.state.breakFast}>
                </fieldset>

                <fieldset>
                    <label>Lunch</label>
                    <input type="text" onChange={this.handleFieldChange} id ="bf" value = {this.state.lunch}>
                </fieldset>

                <fieldset>
                    <label>Dinner</label>
                    <input type="text" onChange={this.handleFieldChange} id ="bf" value = {this.state.dinner}>
                </fieldset>
                </div> */}

                <form className="CreateMealForm">
                    <div 
                        className="form-group">
                        <label htmlFor="breakFast">BreakFast</label>
                        <input  maxlength="25" type="text" required
                          className="form-control"
                         onChange={this.handleFieldChange}
                         id="breakFast" 
                         value={this.state.breakFast} 
                     />
                 </div>
                    <div className="form-group">
                        <label htmlFor="Lunch">Lunch</label>
                        <input maxlength="25" type="text" required
                          className="form-control"

                          onChange={this.handleFieldChange}
                          id="lunch" 
                          value={this.state.lunch}
                           />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">Dinner</label>
                        <input maxlength="25" type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="dinner" 
                          value={this.state.dinner}
                           />
                    </div>

                    
                    
                    <button type="Submit"
                     onClick={this.constructNewMeal} className="btn btn-primary">
                     save</button>
                     {/* <button type="cancel"
                     className="btn btn-primary">
                     cancel</button> */}
                </form>
            </React.Fragment>
        )
    }
}