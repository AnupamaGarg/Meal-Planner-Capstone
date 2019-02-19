import React, { Component } from "react";
import NavBar from "./navBar/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./WeeklyPlanner.css";

class WeeklyPlanner extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default WeeklyPlanner;
