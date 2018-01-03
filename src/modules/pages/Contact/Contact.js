import React from 'react'
import  Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'
import ContactUsForm from '../../common/ContactUsForm/ContactUsForm'

//Content passed into body component
var content = "";

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
        <div className="hero-image-home"></div>
        <Body heading="Contact Us" content={content}/>
        <ContactUsForm />
       
        <div className="main">
        <h1>Our address</h1>
        <p>74 Melville Road, Brunswick West VIC 3055</p>      

        <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com.au/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=74+Melville+Road,+Brunswick+West,+Victoria&amp;aq=0&amp;oq=74+Melville+Road&amp;sll=-37.762836,144.94417&amp;sspn=0.00754,0.016512&amp;ie=UTF8&amp;hq=&amp;hnear=74+Melville+Rd,+Brunswick+West+Victoria+3055&amp;t=m&amp;z=14&amp;ll=-37.762836,144.94417&amp;output=embed"></iframe>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Contact;
