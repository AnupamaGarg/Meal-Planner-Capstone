import React, { Component } from "react"

export default class MealCreateForm extends Component {
    // Set initial state
    state = {
        grocery: "",
        quantity: "",
        store: "",
        userId: "",
        typeId:""
        

    };

    

    handleFieldChange = evt => {
        const stateToChange = {}
        console.log(evt.target.id, evt.target.value);

        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
       clear = evt  => {
           value:[evt.target.id
        ]=evt.target.value=""
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
            grocery: this.state.grocery,
            quantity: this.state.quantity,
            store: this.state.store,
            typeId: this.state.typeId
            // typeId: this.props.groceryTypes.find(e=>e.type === this.state.type).id     
        }
        //  this.clear()
        this.props.addGrocery(newGrocery).then(() => this.props.history.push("/grocery"))
        
    }
     render() {
        console.log(this.props.meals)
        return (
            <React.Fragment>
                
                   <form className="CreateMealForm">
                   <div><b>Create Grocery List</b></div>
                    
                    <div
                            className="form-group">
                            <label htmlFor="grocery">GroceryName</label>
                            <input maxlength="25" 
                                type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="grocery"
                                
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input maxlength="25" 
                                type="text" required
                                className="form-control"
                                // defaultValue="" 

                                onChange={this.handleFieldChange}
                                id="quantity"
                                
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="store">Store</label>
                            <input maxlength="25" 
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
                            
                            onChange={this.handleDropDownChange }
                            id="typeId">
                                <option value="">Select Type</option>
                                {this.props.groceryTypes.map(e =>(
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