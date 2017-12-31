import React from 'react'
import PropTypes from 'prop-types'

class Body extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

Body.defaultProps = {
	content: 'Defualt body content'
}

Body.propTypes = {
	content: PropTypes.string
}

export default Body;
