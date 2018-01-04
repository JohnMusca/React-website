import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'


//Content used to build instagram links
const instagram_link = require('../../config/content/our_training.json').our_training_instagram_link.join('');

//Content passed into body component.
var content = require('../../config/content/our_training.json').our_training.join('');

//adding our instagram links to content
content +=  "<p>" + 
            instagram_link.replace('VID_ID', 'BZe5g8QjVyw') + 
            instagram_link.replace('VID_ID', 'BcUS3zMDONZ') + 
            instagram_link.replace('VID_ID', 'BZXa8wgjSr7') + 
            "</p>";

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
      <div className="hero-image-training"></div>
        <Body heading="Our training" content={content}/>
        <Footer />
      </div>
    )
  }
}

export default OurTraining;
