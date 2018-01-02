import React from 'react';
import PropTypes from 'prop-types';
import { Form,FormGroup, FormControl, Button } from 'react-bootstrap';

const styles = {
          error: {
            "color": "red",
            "fontSize": "12px",
            "marginTop": "5px"
          },
          hidden: {
            "display": "none"
          } 
      };

class ContactUsForm extends React.Component {

  constructor(props) {
    super(props);
    

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
    e.preventDefault();
 
    var isValid = this.showFormErrors();
 
    if(isValid) {
      console.log('Form has no errors, submit');

      document.getElementById('thankYouMessage').style="display:inline;"
      document.getElementById('form').style="display:none;"

      console.log('submitted name: ' + this.refs.email.value);
      console.log('submitted message: ' + this.refs.message.value);
    }

    this.forceUpdate();

  }	

  showFormErrors() {
    const inputs = document.querySelectorAll('input, textarea');

    let isFormValid = true;
    
    inputs.forEach(input => {
      input.classList.add('active');
      
      if (!this.showInputError(input.name)) {
        isFormValid = false;
      }
    });

    return isFormValid;
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
      <div>
        <div id="thankYouMessage" style={styles.hidden}>
          <p>Thanks for submitting your enquiry. We'll get back to you shortly</p>
        </div> 
        <form id="form">
            <label id="emailLabel">
              Email
            </label>
            <input type="email" value={this.state.email} name="email" ref="email" onChange={this.handleInputChange} required/>
            <div className="error" id="emailError" style={styles.error}>{this.state.emailErrorMessage}</div>
            <br />
    
            <label id="messageLabel">
              Message
            </label>
            <textarea rows="5" cols="30" value={this.state.message} name="message" ref="message" onChange={this.handleInputChange} required></textarea>
            <div className="error" id="messageError" style={styles.error}>{this.state.messageErrorMessage}</div>
            <br />

            <Button onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
    )
  }

}

export default ContactUsForm;
