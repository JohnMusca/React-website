import React from 'react'
import { NavLink } from 'react-router-dom'

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
            <img className="logo" src="/img/logo.png" alt="Logo"/>
          </NavLink>
          <nav id="nav">
          <ul>
            <li><NavLink exact={true}  to="/" activeClassName="selected">Homie</NavLink></li>
            <li><NavLink to="/our_training/" activeClassName="selected">Our training</NavLink></li>
            <li><NavLink to="/about_us/" activeClassName="selected">About the class</NavLink></li>
            <li><NavLink to="/contact_us/" activeClassName="selected">Contact</NavLink></li>
            <li><a href="https://www.instagram.com/buksingclfmelb/" title="Instagram" target="_blank" rel="noopener noreferrer">
              <img className="instagram-header-icon" src="/img/instagram-header-icon.png" alt="Instagram Icon" /></a></li>
            
            <li><a href="https://www.facebook.com/Buk-Sing-Choy-Lay-Fut-Kung-Fu-School-186276348584241/" title="Instagram" target="_blank" rel="noopener noreferrer">
              <img className="instagram-header-icon" src="/img/FB-f-Logo__blue_29.png" alt="Facebook Icon" /></a></li>
            
            
          </ul>
        </nav>
    </div>
  </header>
		)
	}
}

export default Header;
