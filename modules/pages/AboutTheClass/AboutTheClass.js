import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'

//Content passed into body component
var content = "<p>About the class content</p>";

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
        <div class="hero-image-about"></div>
        <Body content={content} />
        <Footer />
      </div>
    )
  }
}

export default AboutTheClass;
