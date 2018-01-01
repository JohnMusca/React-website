import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'

var content="<p>Our training content</p>";

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
