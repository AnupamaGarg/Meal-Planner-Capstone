import React, { Component } from 'react'
import { Link } from "react-router-dom";


class GroceryList extends Component {
    render() {
        // console.log(this.props.groceries)
               


        return (
            <React.Fragment>
                  <div className="GListHeading"><b>GroceryList</b></div>
                <div className="glist">

                    <section className="grocery">
                    {/* {
                        this.props.types.map( type => {
                        if(type.id === this.props.grocery.type.typeId){
                            return (<h4 key={type.id}>{type.type}</h4>)
                        }
                        })
                    } */}
                        {
                            this.props.groceries.map(grocery =>
                                
                                <div className="eachListDiv" key={grocery.id}>
                                    
                                    <input type="checkbox" id="myCheck"/>
                                    <h4>{grocery.groceryName} </h4>
                                    <h4>{grocery.quantity} </h4>
                                    <h4>{grocery.store} </h4>
                                    {/* <h4>{grocery.type.type} </h4> */}
                                    <h4>{grocery.type ? grocery.type.type : ""} </h4>
                                    
                                    

                                    <a href="#"
                                        onClick={() => this.props.deleteGrocery(grocery.id)}
                                        className="card-link">Delete</a>
                                    <br></br>




                                    <Link className="nav-link" to={`/grocery/${grocery.id}/edit`}>Edit</Link>




                                    
                                </div>

                            )
                        }
                    </section>

                </div>
            </React.Fragment>
        )
    }
}

export default GroceryList