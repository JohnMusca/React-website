import React from 'react';
import PropTypes from 'prop-types';
import { Form,FormGroup, FormControl, Button } from 'react-bootstrap';


class ContactUsForm extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = { email: '',
									 message: '' };

		this.handleInputChange = this.handleInputChange.bind(this);
  }

	handleInputChange(event) { 

		const target = event.target;

		console.log(target.name);
		console.log(target.value);

		this.setState({
			[target.name]: target.value
		});
	}

	handleSubmit() {
		//ensure the state is valid.

		//if it is, then submit the form.
	}	

	render() {
		return (
			<form>
					<label>
						Email:
						<input type="text" value={this.state.email} name="email" onChange={this.handleInputChange}/>
					</label>
					<br />
	
					<label>
						Message:
						<textarea rows="5" cols="30" value={this.state.message} name="message" onChange={this.handleInputChange}></textarea>
					</label>
					<br />

					<Button onClick={this.handleInputChange.bind(this)}>Submit</Button>
			</form>
		)
	}
}

ContactUsForm.defaultProps = {

}

ContactUsForm.propTypes = {

}

export default ContactUsForm;
