import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'

class AboutTheClass extends React.Component {
	render () {
		return (
			<div>
				<Body content="<p>About the class content</p>" />
				<Footer />
			</div>
		)
	}
}

export default AboutTheClass;
