import React from 'react';
import PropTypes from 'prop-types';
import { Form,FormGroup, FormControl, Button } from 'react-bootstrap';


class ContactUsForm extends React.Component {

  constructor(props) {
    super(props);
    
    this.styles = {
      error: {
        "color": "red",
        "fontSize": "12px",
        "marginTop": "5px"
      }
    };

    this.state = { email:   '',
                   message: '',
                   emailErrorMessage: '',
                   messageErrorMessage: '' };

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
    var validity = this.refs[ref].validity;
    var label    = document.getElementById(`${ref}Label`).textContent;
    var errorMessageField = `${ref}ErrorMessage`;

    const isEmail   = ref.indexOf('email') !== -1;

    //set custom validity for email, doesn't work on all browsers
    if(isEmail) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(this.refs.email.value.toLowerCase())) {
        validity.email = false;
      } else {
        validity.email = true;
      }
    }
  
    if (!validity.valid) {
      if (validity.valueMissing) {
        this.state[errorMessageField] = `${label} is a required field`; 	
      } else if (isEmail && !validity.email) {
        this.state[errorMessageField] = `${label} is not a valid email address`; 
      } 

      return false;
    }

    this.state[errorMessageField] = '';
    return true;
  }

  render() {
    return (
      <form>
          <label id="emailLabel">
            Email
          </label>
          <input type="email" value={this.state.email} name="email" ref="email" onChange={this.handleInputChange} required/>
          <div className="error" id="emailError" style={this.styles.error}>{this.state.emailErrorMessage}</div>
          <br />
  
          <label id="messageLabel">
            Message
          </label>
          <textarea rows="5" cols="30" value={this.state.message} name="message" ref="message" onChange={this.handleInputChange} required></textarea>
          <div className="error" id="messageError" style={this.styles.error}>{this.state.messageErrorMessage}</div>
          <br />

          <Button onClick={this.handleInputChange.bind(this)}>Submit</Button>
      </form>
    )
  }

}

export default ContactUsForm;
