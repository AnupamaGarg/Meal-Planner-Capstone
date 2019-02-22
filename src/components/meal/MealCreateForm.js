import React, { Component } from "react"
import "./meal.css"


export default class MealCreateForm extends Component {
    // Set initial state
    state = {
        breakFast: "",
        lunch: "",
        dinner: "",
        dayId: "",
        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId,
        mealOftheDay: ""


    };
    

    clearFields = () => {
        document.querySelector("#dayId").value="";

       return this.setState({
            dayId:"",
            breakFast: "",
            lunch: "",
            dinner: ""
        })
    }






    handleFieldChange = evt => {
        const stateToChange = {}
        console.log(evt.target.id, evt.target.value);

        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        // evt.currentTarget.reset();
    }
    handleDropDownChange = evt => {
        const stateToChange = {}
        console.log(evt.target.value)

        stateToChange[evt.target.id] = parseInt(evt.target.value)
        this.setState(stateToChange)
        
    }
    
    constructNewMeal = evt => {
        evt.preventDefault()
        if (this.state.dayId === ""||this.state.dayId === null) {
            window.alert("Please select the day")
        }
        else if (this.props.meals.find(e => e.dayId == this.state.dayId && e.userId==this.state.userId)) {
            alert("it will replace the existing meal for this day")


            // let id = this.state.dayId
            // let userId = this.state.userId


            fetch(`http://localhost:5002/meals?userId=${this.state.userId}&dayId=${this.state.dayId}`).then(e => e.json())
                // fetch(`http://localhost:5002/days/?_embed=meals`).then(e => e.json())

                .then(mealsOftheDay => { this.props.deleteMeal(mealsOftheDay[0].id) })
                // .then(ChangedMealOftheDay => console.log(ChangedMealOftheDay))



            const meal = {
                breakFast: this.state.breakFast,
                lunch: this.state.lunch,
                dinner: this.state.dinner,
                dayId: this.state.dayId,
                userId: this.state.userId
                // userId:JSON.parse(sessionStorage.getItem("userInfo")).userId
                // employeeId: this.props.employees.find(e => e.name === this.state.employee).id
            }



            console.log("Gives the meal object", meal)
            this.props.addMeal(meal)
                
                .then(() => this.clearFields())
                .then(() => this.props.history.push("/meal"))
        }
        else{
            const meal = {
                breakFast: this.state.breakFast,
                lunch: this.state.lunch,
                dinner: this.state.dinner,
                dayId: this.state.dayId,
                userId: this.state.userId
                
            }
                    

                
                console.log("Gives the meal object", meal)
                this.props.addMeal(meal)
                .then(() => this.clearFields())
                .then(() => this.props.history.push("/meal"))
        }



        
    }
    render() {
        console.log(this.props.days)
        return (
            <React.Fragment>
                <form className="CreateMealForm">
                    <div className="mCreateDiv">
                        <div><h3><b>Create Meal</b></h3></div>
                        <div className="form-group">
                            <select 
                                defaultValue=""
                                className="form-control"
                                onChange={this.handleDropDownChange}
                                id="dayId">

                                <option 
                                value=""
                                >Select Day</option>
                                {this.props.days.map(e => (
                                    <option key={e.id} value={e.id}>
                                        {e.name}
                                    </option>
                                    // this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                                ))}
                            </select>




                        </div>
                        <div
                            className="form-group">
                            <label htmlFor="breakFast">BreakFast</label>
                            <input maxLength="25"
                                type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="breakFast"
                                value={this.state.breakFast}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Lunch">Lunch</label>
                            <input maxLength="25"
                                type="text" required
                                className="form-control"

                                onChange={this.handleFieldChange}
                                id="lunch"
                                value={this.state.lunch}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">Dinner</label>
                            <input maxLength="25"
                                type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="dinner"
                                value={this.state.dinner}

                            />




                        </div>



                        <button type="Submit"
                            onClick={this.constructNewMeal}  className="btn btn-primary">
                            save</button>

                    </div>
                </form>
            </React.Fragment>
        )
    }
}