import React, { Component } from 'react'
import { Link } from "react-router-dom";


class GroceryList extends Component {

    deleteThisGroceryList =()=>{
        if (window.confirm("Do you really want to delete whole List?")) { 
            this.props.groceries.forEach(grocery=>
                this.props.deleteGrocery(grocery.id))
          }
       }
    render() {
        // console.log(this.props.groceries)



        return (
            <React.Fragment>
                <div className="GListHeading"><h3><b>GroceryList</b></h3><button id="deteleWholeList" onClick={this.deleteThisGroceryList}>Clear All </button></div>
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

                                <div className="eachListDiv" id={grocery.id} key={grocery.id}>

                                    <input type="checkbox"  />
                                    <h4>{grocery.groceryName} </h4>
                                    <h4>{grocery.quantity} </h4>
                                    <h4>{grocery.store} </h4>
                                    {/* <h4>{grocery.type.type} </h4> */}
                                    <h4>{grocery.type ? grocery.type.type : ""} </h4>



                                    <a href="#"
                                        onClick={() => this.props.deleteGrocery(grocery.id)}
                                        >Delete</a>
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