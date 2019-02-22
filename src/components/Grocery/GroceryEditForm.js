import React, { Component } from "react"
import GroceryManager from '../dataManager/GroceryManager'

export default class GroceryEditForm extends Component {
    // Set initial state
    state = {
        groceryName: "",
        quantity: "",
        store: "",
        typeId:""
        

    };

    

    handleFieldChange = evt => {
        const stateToChange = {}
        // console.log(evt.target.id, evt.target.value);

        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
       
        
    

    updateExistingGrocery = evt => {
        evt.preventDefault()
            const existingGrocery = {
            groceryName: this.state.groceryName,
            quantity: this.state.quantity,
            store: this.state.store,
            typeId: this.state.typeId
                 
        }
        
        this.props.updateGrocery(this.props.match.params.groceryId, existingGrocery)
        .then(() => this.props.history.push("/grocery")) 
        
    }

    componentDidMount() {
        GroceryManager.get(this.props.match.params.groceryId)
        .then(grocery => {
          this.setState({
        groceryName: grocery.groceryName,
        quantity: grocery.quantity,
        store: grocery.store,
        typeId: grocery.typeId
              
          });
        });
      }
     render() {
        
        return (
            <React.Fragment>
                
                   <form className="CreateMealForm">
                   <div><b>Edit Grocery List</b></div>
                    
                    <div
                            className="form-group">
                            <label htmlFor="grocery">GroceryName</label>
                            <input maxLength="25" 
                                type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="groceryName"
                                value={this.state.groceryName}
                                
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input maxLength="25" 
                                type="text" required
                                className="form-control"
                            

                                onChange={this.handleFieldChange}
                                id="quantity"
                                value={this.state.quantity}
                                
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="store">Store</label>
                            <input maxLength="25" 
                                type="text" required
                                className="form-control"
                                defaultValue="" 
                                onChange={this.handleFieldChange}
                                id="store"
                                value={this.state.store}
                                
                            />
                        </div>
                        <div className="form-group">
                            <select required
                            className="form-control"
                            
                            onChange={this.handleDropDownChange }
                            id="typeId">
                                <option value="">Select Type</option>
                                {this.props.types.map(e =>(
                                    <option key={e.id} value={e.id}>
                                    {e.type}
                                    </option>
                                    
                                ))}
                                
                                </select>

                        </div>



                        <button type="submit" onClick={this.updateExistingGrocery} className="btn btn-primary">Save</button>
                        
                </form>
            </React.Fragment>
                )
            }
}