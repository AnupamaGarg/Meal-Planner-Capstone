import React, { Component } from "react"
import "./Grocery.css"

export default class GroceryCreateForm extends Component {
    // Set initial state
    state = {
        groceryName: "",
        quantity: "",
        store: "",
        typeId: "",
        userId:JSON.parse(sessionStorage.getItem("userInfo")).userId,


    };

    
     

    clearFields=()=>{
        document.querySelector("#groceryName").value="";
        document.querySelector("#quantity").value="";
        document.querySelector("#store").value="";
        
        this.setState({
        groceryName: "",
        quantity: "",
        store: "",
        typeId: ""
        })
      }
      // clear = evt => {
    //     value: [evt.target.id
    //     ] = evt.target.value = ""
    // }


    handleFieldChange = evt => {
        const stateToChange = {}
        
        console.log(evt.target.id, evt.target.value)
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    

    handleDropDownChange = evt => {
        const stateToChange = {}
        // console.log(evt.target.id, evt.target.value);

        stateToChange[evt.target.id] = parseInt(evt.target.value)
        this.setState(stateToChange)
    }
   
    constructNewgrocery = evt => {
        evt.preventDefault()
    
        const newGrocery = {
            groceryName: this.state.groceryName,
            quantity: this.state.quantity,
            store: this.state.store,
            typeId: this.state.typeId,
            userId:this.state.userId
            // userId:JSON.parse(sessionStorage.getItem("userInfo")).userId
            // typeId: this.props.groceryTypes.find(e=>e.type === this.state.type).id     
        }
         
        this.props.addGrocery(newGrocery)
        .then (()=> this.clearFields())
        .then(() => this.props.history.push("/grocery"))

    }
    render() {
        
        return (
            <React.Fragment>
                <div>
                    {/* <button
                        onclick={this.GoToMealPlanner}
                    >Go to Meal Planner</button> */}
                </div>

                <form className="CreateGroceryForm">
                    <div><h3><b>Create Grocery List</b></h3></div>

                    <div
                        className="form-group">
                        <label htmlFor="grocery"><h4>GroceryName</h4></label>
                        <input maxlength="25"
                               refs = "groceryName"
                            type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="groceryName"

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity"><h4>Quantity</h4></label>
                        <input maxlength="25"
                        ref = "quantity"
                            type="text" required
                            className="form-control"
                            // defaultValue="" 

                            onChange={this.handleFieldChange}
                            id="quantity"

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="store"><h4>Store</h4></label>
                        <input maxlength="25"
                             ref="store"
                            type="text" required
                            className="form-control"
                            defaultValue=""
                            onChange={this.handleFieldChange}
                            id="store"

                        />
                    </div>
                    <div className="form-group">
                        <select required
                            className="form-control"
                            ref="typeId"

                            onChange={this.handleDropDownChange}
                            id="typeId">
                            <option value="">Select Type</option>
                            {this.props.types.map(e => (
                                <option key={e.id} value={e.id}>
                                    {e.type}
                                </option>

                            ))}

                        </select>

                    </div>



                    <button type="Submit"
                        onClick={this.constructNewgrocery} className="btn btn-primary">
                        save</button>

                </form>
            </React.Fragment>
        )
    }
}