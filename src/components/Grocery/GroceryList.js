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
                <div className="glist">

                <div className="GListHeading"><h3><b>GroceryList</b></h3><a href="#" className="deteleWholeList" onClick={this.deleteThisGroceryList}>Clear All </a></div>
                

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

                                    <input  className = "checkBox" type="checkbox"  />
                                    <h5>{grocery.groceryName} </h5>
                                    <h5>{grocery.quantity} </h5>
                                    <h5>{grocery.store} </h5>
                                    {/* <h4>{grocery.type.type} </h4> */}
                                    <h5>{grocery.type ? grocery.type.type : ""} </h5>



                                    <a href="#" className="card-link"
                                        onClick={() => this.props.deleteGrocery(grocery.id)}
                                        >Delete</a>
                                    <br></br>




                                    <Link className="card-link-edit" to={`/grocery/${grocery.id}/edit`}>Edit</Link>





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