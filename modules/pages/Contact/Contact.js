import React from 'react'
import  Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'
import ContactUsForm from '../../common/ContactUsForm/ContactUsForm'

var content = "<p>Contact us content</p>";

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
