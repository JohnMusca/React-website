import React from 'react'
import  Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'

class Contact extends React.Component {
	render() {
		return (
			<div>
				<Body content="<p>Contact us content</p>" />
				<Footer />
			</div>
		)
	}
}

export default Contact;
