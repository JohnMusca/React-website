import React from 'react'
import HtmlToReact from 'html-to-react'
import  Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'
import ContactUsForm from '../../common/ContactUsForm/ContactUsForm'

//Content passed into body component
var content = "";

//Content to be used for google maps
const content_google_map = require('../../config/content/contact_us.json').contact_us_google_map.join(',');


/**
* Contact us page component used to render the page.
* This makes use of the contactUsForm component.
*
* Props:      None
* 
* State vars: None
*/
class Contact extends React.Component {
  render() {

    //given we're parsing html content, we'll use this now
    var HtmlToReactParser = HtmlToReact.Parser;
    var htmlToReactParser = new HtmlToReactParser();
    var map_content = htmlToReactParser.parse(content_google_map);

    return (
      <div>
        <div className="hero-image-home"></div>
        <Body heading="Contact Us" content={content}/>
        <ContactUsForm />
       
        <div className="main">
        <h1>Our address</h1>
        <p>74 Melville Road, Brunswick West VIC 3055</p>      
      
        {map_content}
  
        </div>

        <Footer />
      </div>
    )
  }
}

export default Contact;
