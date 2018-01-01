import React from 'react';
import PropTypes from 'prop-types';

class ContactUsForm extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = { value: '' };

		this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleSubmit() { 
		
	}	

	render() {
		return (
			<div>

			</div>
		)
	}
}

ContactUsForm.defaultProps = {

}

ContactUsForm.propTypes = {

}

export default ContactUsForm;
