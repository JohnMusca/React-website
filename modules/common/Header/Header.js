import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'

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
          <NavLink exact={true}  to="/">
            <img className="logo" src="/public/img/logo.png" alt="Logo"/>
          </NavLink>
          <nav id="nav">
          <ul>
            <li><NavLink exact={true}  to="/" activeClassName="selected">Home</NavLink></li>
            <li><NavLink to="/our_training/" activeClassName="selected">Our training</NavLink></li>
            <li><NavLink to="/about_us/" activeClassName="selected">About the class</NavLink></li>
            <li><NavLink to="/contact_us/" activeClassName="selected">Contact</NavLink></li>
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
