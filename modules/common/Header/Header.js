import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

/**
* Header component which contains the site menu and links.
*
* Props:      None
* 
* State vars: None
*/
class Header extends React.Component {
	render() { 
		return (
			<div>
				<h1>Header</h1>
				<ul role="nav">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/our_training">Our training</Link></li>
					<li><Link to="/about_the_class">About the class</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		)
	}
}

export default Header;
