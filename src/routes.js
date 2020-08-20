import React from "react"
import { Route } from "react-router-dom"
import Details from "./components/Details"
import App from "./App"

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route path="/details" component={Details} />
    </div>
  )
}

export default Routes