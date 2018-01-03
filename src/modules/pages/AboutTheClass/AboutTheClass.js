import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'

//Content passed into body component
const content = require('../../config/content/about_us.json').about_us.join(',');

/**
* About the class page component used to render the page.
*
* Props:      None
* 
* State vars: None
*/
class AboutTheClass extends React.Component {
  render () {
    return (
      <div>
        <div  className="hero-image-about"></div>
        <Body heading="About the class" content={content} />
        <Footer />
      </div>
    )
  }
}

export default AboutTheClass;
