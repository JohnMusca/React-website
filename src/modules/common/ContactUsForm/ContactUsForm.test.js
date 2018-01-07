import React from 'react';
import ContactUsForm from './ContactUsForm';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link} from 'react-router-dom'
import { shallow, configure, mount, find, ref, findWhere } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<MyComponent />', () => {

  it('renders a contctUsFormComponent', () => {
    const component = renderer.create(
      <ContactUsForm />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  //handleInputChange event
  it('handles on input change event', () => {

    const output = mount(<ContactUsForm />);
    var input = output.find('input').first();   
    input.name = "email"

    //when showInputError(ref) is called, simulate return false
    //use a stub
    output.instance().showInputError = jest.fn();
    output.update();

    //manually mock the event we pass in
    var mockEvent = {};
    mockEvent.target = new Object();
    mockEvent.target.classList = new Object();
    mockEvent.target.name = {validity:false};
    mockEvent.target.value = "John@test.com";

    //mock the target object
    mockEvent.target.classList.add = jest.fn();
   
    //our assertions
    expect(output.state().email).toEqual('');
  
    //find email input and test it for value change
    output.state().email = mockEvent.target.value;
    output.find('input').first().simulate('change', {target:  mockEvent.target });
    expect(output.state().email).toEqual('John@test.com');

    //console.log(output.debug());
    //console.log(output.find('input').debug());
  });

  //showInputError method
  it('handles showInputError method', () => {

    const output = mount(<ContactUsForm />, { attachTo: document.body });

    //mock the ref
    output.ref('email').validity = new Object;

    expect(output.instance().showInputError('email')).toEqual(false);

  });

  //showFormErrors method
  it('handles showFormErrors', () => {
    const output = mount(<ContactUsForm />, { attachTo: document.body }); 

    output.ref('email').validity = new Object;
    output.ref('email').validity.valid = false;
    output.ref('message').validity = new Object;
    output.ref('message').validity.valid = false;

    output.instance.showInputError = jest.fn();
    output.update();

    expect(output.instance().showFormErrors()).toEqual(false);
  });

  it('handles handlesubmit', () => {
    const output = mount(<ContactUsForm />);


  });
});
