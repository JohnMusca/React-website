import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './modules/pages/Home/Home'
import OurTraining from './modules/pages/OurTraining/OurTraining'
import AboutTheClass from './modules/pages/AboutTheClass/AboutTheClass'
import Contact from './modules/pages/Contact/Contact'

render((
	<Router history={browserHistory}>    
		<Route path="/" component={Home}/>
    <Route path="/our_training" component={OurTraining}/>
    <Route path="/about_the_class" component={AboutTheClass}/>
    <Route path="/contact" component={Contact}/>
  </Router>
), document.getElementById('app'))
