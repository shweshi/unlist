import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Routes from "./routes"
import { Router } from "react-router-dom"
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>, document.getElementById('root'))