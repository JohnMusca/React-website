import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'

//Content passed into body component.
var content="<p>Our training content</p>";

/**
* Our Training page component used to render the page.
*
* Props:      None
* 
* State vars: None
*/
class OurTraining  extends React.Component {
  render () {
    return (
      <div>
        <Body content={content}/>
        <Footer />
      </div>
    )
  }
}

export default OurTraining;
