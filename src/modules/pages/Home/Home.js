import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'

//content passed into body component
const content = require('../../config/content/home.json').homepage.join(',');

/**
* Home page component used to render the page.
* This is the default route for the site.
*
* Props:      None
* 
* State vars: None
*/
class Home extends React.Component {
  render() {
    return (
      <div> 
        <div className="hero-image-home"></div>
        <Body heading="Buk Sing Choy Lay Fut" content={content}/>
        <Footer />
      </div>
    )
  }
}

export default Home;
