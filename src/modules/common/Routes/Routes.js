import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import OurTraining from '../../pages/OurTraining/OurTraining'
import AboutTheClass from '../../pages/AboutTheClass/AboutTheClass'
import Contact from '../../pages/Contact/Contact'

/**
* The main Route class. This sets up the routes for the header component.
*
* Props:      None
* 
* State vars: None
*/
class Routes extends React.Component {
  render() {
    return (
        <div>   
          <Route exact path="/" component={Home}/>
          <Route path="/our_training/" component={OurTraining}/>
          <Route path="/about_us/" component={AboutTheClass}/>
          <Route path="/contact_us/" component={Contact}/>
        </div>
    )
  }
}

export default Routes;
