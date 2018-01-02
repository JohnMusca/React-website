import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import OurTraining from '../../pages/OurTraining/OurTraining'
import AboutTheClass from '../../pages/AboutTheClass/AboutTheClass'
import Contact from '../../pages/Contact/Contact'

class Main extends React.Component {
  render() {
    return (
        <div>   
          <Route exact path="/" component={Home}/>
          <Route path="/our_training" component={OurTraining}/>
          <Route path="/about_the_class" component={AboutTheClass}/>
          <Route path="/contact" component={Contact}/>
        </div>
    )
  }
}

export default Main;
