import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import WeeklyPlanner from './components/WeeklyPlanner'
import './index.css'

ReactDOM.render(
  <Router>
      <WeeklyPlanner />
  </Router>
  , document.getElementById('root'))
