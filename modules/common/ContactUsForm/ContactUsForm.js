import React from 'react';
import PropTypes from 'prop-types';
import { Form,FormGroup, FormControl, Button } from 'react-bootstrap';

class ContactUsForm extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = { email:   '',
									 message: '' };

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit      = this.handleSubmit.bind(this);
  }

	handleInputChange(event) { 

		const target = event.target;

		target.classList.add('active');

		this.setState({
			[target.name]: target.value
		});

		this.showInputError(target.name);
	}

	handleSubmit(e) {
		console.log('form submit action');
	}	

	showInputError(ref) {
		const validity = this.refs[ref].validity;
		const label    = document.getElementById(`${ref}Label`).textContent;
		const error    = document.getElementById(`${ref}Error`).textContent;

		const isEmail   = ref.indexOf('email') !== -1;
		const isMessage = ref.indexOf('message') !== -1;

		//set custom validity for email, doesn't work on all browsers
		if(isEmail) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if(!re.test(this.refs.email.value.toLowerCase())) {
				console.log('invalid email');
			} else {
				console.log('valid email');
			}
		}
	
		if (!validity.valid) {
			if (validity.valueMissing) {
        error.textContent = `${label} is a required field`; 	
				console.log('empty' + label);
			} else if (isEmail && validity.email) {
        error.textContent = `${label} is not a valid email address`; 
				console.log('invalid' + label);
			} 

			return false;
		}

    error.textContent = '';
    return true;
	}

	render() {
		return (
			<form>
					<label id="emailLabel">
						Email
					</label>
					<input type="email" value={this.state.email} name="email" ref="email" onChange={this.handleInputChange} required/>
					<div className="error" id="emailError"></div>
					<br />
	
					<label id="messageLabel">
						Message
					</label>
					<textarea rows="5" cols="30" value={this.state.message} name="message" ref="message" onChange={this.handleInputChange} required></textarea>
					<div className="error" id="messageError"></div>
					<br />

					<Button onClick={this.handleInputChange.bind(this)}>Submit</Button>
			</form>
		)
	}
}

export default ContactUsForm;
