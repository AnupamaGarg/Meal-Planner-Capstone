// import React, { Component } from 'react'


// class MealAddForm extends Component {
//     render() {
//         // console.log(this.props.days)

//         return (
//             <React.Fragment>
//                 <section>
//                 <div>
//                 <h2>Plan Your Meal</h2>
//                 <div className="addGroceryButton">
//                         <button type="button"
//                          className="btn btn-success"
//                          onClick={() => {
//                              this.props.history.push("/grocery")}
//                          }>Add Grocery in the List
//                          </button>
//                      </div>
//                 </div>
//                 <hr></hr>
//             {  
            
//                 this.props.days.map(day =>
//                     <div key={day.Id}>
//                         <h2>{day.dayName}</h2>
//                         <p><b>BreakFast</b></p>
//                         <p><b>Lunch</b></p>
//                         <p><b>Dinner</b></p>
//                         <div className="addMealButton">
//                            <button type="button"
//                             className="btn btn-success"
                            
//                             onClick={() => {
//                                 this.props.history.push("/new")}
//                             }>Add Meal
//                             </button>
//                         </div>
//                         <hr></hr>
//                     </div>
                    
                    
//                 )
//             }
//             </section>
        
//             </React.Fragment>
//         )
//     }
// }

// export default MealAddForm