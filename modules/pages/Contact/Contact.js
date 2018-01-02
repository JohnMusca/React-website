import React from 'react'
import  Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'
import ContactUsForm from '../../common/ContactUsForm/ContactUsForm'

//Content passed into body component
var content = "<p>Contact us content</p>";

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
    return (
      <div>
        <Body content={content}/>
        <ContactUsForm />
        <Footer />
      </div>
    )
  }
}

export default Contact;
