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
  <header>
    <div id="wrap">
          <a href="index.html" title="Home"><img className="logo" src="/public/img/logo.png" alt="Logo"/></a>
          <nav id="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/our_training">Our training</Link></li>
            <li><Link to="/about_the_class">About the class</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="https://www.instagram.com/buksingclfmelb/" title="Instagram" target="_blank">
              <img className="instagram-header-icon" src="/public/img/instagram-header-icon.png" alt="Instagram Icon" /></a></li>
          </ul>
        </nav>
    </div>
  </header>
		)
	}
}

export default Header;
